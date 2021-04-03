// import { asyncActionStart, asyncActionError, asyncActionFinish } from '../async/asyncActions';
import { toastr } from 'react-redux-toastr';
import { createNewConcert } from '../../app/common/util/helpers';
import firebase  from '../../app/config/firebase';
import { FETCH_CONCERTS } from './concertConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';

export const createConcert = (concert) => {
  return async (dispatch, getState, {getFirestore, getFirebase}) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    const newConcert = createNewConcert(user, photoURL, concert);

    try {
      let createdConcert = await firestore.add('concerts', newConcert);
      await firestore.set(`concert_attendee/${createdConcert.id}_${user.uid}`, {
        concertId: createdConcert.id,
        userUid: user.uid,
        concertDate: concert.date,
        host: true
      })
      toastr.success('Success!', 'Concert has been created');
      return createdConcert;
    } catch (error) {
      toastr.error('Oops!', 'Something went wrong'); 
    }
  }
};

export const updateConcert = (concert) => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`concerts/${concert.id}`, concert)
      toastr.success('Success!', 'Concert has been updated');
    } catch (error) {
      toastr.error('Oops!', 'Something went wrong'); 
    }
  }
};

export const cancelToggle = (cancelled, concertId) => async (
  dispatch, 
  getState, 
  {getFirestore}
) => {
    const firestore = getFirestore();
    const message = cancelled 
      ? 'Are you sure you want to cancel this concert'
      : 'This will reactivate this concert, are you sure?';
    try {
      toastr.confirm(message, {
        onOk: async () =>
          await firestore.update(`concerts/${concertId}`, {
            cancelled: cancelled
          })
      });
    } catch (error) {
      console.log(error);
    }
  }

export const getConcertsForDashboard = (lastConcert) =>
  async (dispatch, getState) => {
    let today = new Date(Date.now());
    const firestore = firebase.firestore();
    const concertsRef = firestore.collection('concerts');
    try {
      dispatch(asyncActionStart());
      let startAfter = 
        lastConcert && 
        (await firestore
          .collection('concerts')
          .doc(lastConcert.id)
          .get());
      let query;

      lastConcert 
        ? (query = concertsRef
            // .where('date', '>=', today)
            .orderBy('date')
            .startAfter(startAfter)
            .limit(2))
        : (query = concertsRef
            // .where('date', '>=', today)
            .orderBy('date')
            .limit(2));

      let querySnap = await query.get();

      if (querySnap.docs.length === 0) {
        dispatch(asyncActionFinish())
        return querySnap;
      }

      let concerts = [];

      for (let i = 0; i < querySnap.docs.length; i++) {
        let cncrt = {...querySnap.docs[i].data(), id: querySnap.docs[i].id};
        concerts.push(cncrt);
      }

      dispatch({type: FETCH_CONCERTS, payload: {concerts}});
      dispatch(asyncActionFinish());
      return querySnap;
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }

export const addConcertComment = (concertId, values, parentId) =>
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const profile = getState().firebase.profile;
    const user = firebase.auth().currentUser;
    let newcomment = {
      parentId: parentId,
      displayName: profile.displayName,
      photoURL: profile.photoURL || '/pub_assets/adidas.webp',
      uid: user.uid,
      text: values.comment,
      date: Date.now()
    }
    try {
      await firebase.push(`concert_chat/${concertId}`, newcomment)
    } catch (error) {
      console.log(error)
      toastr.error('Oops', 'Problem adding comment')
    } 
  }