import { toastr } from "react-redux-toastr";
import cuid from 'cuid';
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../../async/asyncActions";
import { FETCH_CONCERTS } from '../../concert/concertConstants';
import firebase from '../../../app/config/firebase';

export const updateProfile = (user) =>
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const {isLoaded, isEmpty, ...updatedUser} = user;
    try {
      await firebase.updateProfile(updatedUser);
      toastr.success('Success', 'Your profile has been updated');
    } catch (error) {
      console.log(error);
    }
  }

export const uploadProfileImage = (file, fileName) =>
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const imageName = cuid();
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const path = `${user.uid}/user_images`;
    const options = {
      name: imageName
    };
    try {
      dispatch(asyncActionStart());
      // upload the file to firebase storage
      let uploadFile = await firebase.uploadFile(path, file,null, options)
      // get url of image
      let downloadURL = await uploadFile.uploadTaskSnapshot.ref.getDownloadURL();
      // get userdoc
      let userDoc = await firestore.get(`users/${user.uid}`);
      // check if user has photo, if not update profile
      if (!userDoc.data().photoURL) {
        await firebase.updateProfile({
          photoURL: downloadURL
        });
        await user.updateProfile({
          photoURL: downloadURL
        })
      }
      // add the image to firestore
      await firestore.add({
        collection: 'users',
        doc: user.uid,
        subcollections: [{collection: 'photos'}]
      }, {
        name: imageName,
        url: downloadURL
      })
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError());
    }
  }

export const deletePhoto = photo =>
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    try {
      await firebase.deleteFile(`${user.uid}/user_images/${photo.name}`);
      await firestore.delete({
        collection: 'users',
        doc: user.uid,
        subcollections: [{collection: 'photos', doc: photo.id}]
      })
    } catch (error) {
      console.log(error);
      throw new Error('Problem deleting the photo')
    }
  }

export const setMainPhoto = photo =>
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    try {
      return await firebase.updateProfile({
        photoURL: photo.url
      });
    } catch (error) {
      console.log(error);
      throw new Error('Problem setting main photo')
    }
  }

export const goingToConcert = (concert) =>
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    const profile = getState().firebase.profile;
    const attendee = {
      going: true,
      joinDate: firestore.FieldValue.serverTimestamp(),
      photoURL: profile.photoURL || '/pub_assets/bnr_sup.png',
      displayName: profile.displayName,
      host: false
    }
    try {
      await firestore.update(`concerts/${concert.id}`, {
        [`attendees.${user.uid}`]: attendee
      })
      await firestore.set(`concert_attendee/${concert.id}_${user.uid}`, {
        concertId: concert.id,
        userUid: user.uid,
        concertDate: concert.date,
        host: false
      })
      toastr.success('Success', 'You have signed up for this concert')
    } catch (error) {
      console.log(error)
      toastr.error('Oops', 'Problem signing up to this concert')
    }
  }

export const cancelGoingToConcert = (concert) =>
  async (dispatch, getState, {getFirestore, getFirebase}) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    try {
      await firestore.update(`concerts/${concert.id}`, {
        [`attendees.${user.uid}`]: firestore.FieldValue.delete()
      })
      await firestore.delete(`concert_attendee/${concert.id}_${user.uid}`);
      toastr.success('Success', 'You have removed yourself from this concert');
    } catch (error) {
      console.log(error);
      toastr.error('Oops', 'Something went wrong')
    }
  }

export const getUserConcerts = (userUid, activeTab) =>
  async (dispatch, getState) => {
    dispatch(asyncActionStart());
    const firestore = firebase.firestore();
    const today = new Date(Date.now());
    let concertsRef = firestore.collection('concert_attendee');
    let query;
    switch (activeTab) {
      case 1: // past concerts
        query = concertsRef
          .where('userUid', '==', userUid)
          .where('concertDate', '<=', today)
          .orderBy('concertDate', 'desc');
        break;
      case 2: // future concerts
        query = concertsRef
          .where('userUid', '==', userUid)
          .where('concertDate', '>=', today)
          .orderBy('concertDate');
        break;
      case 3: // hosted concerts
        query = concertsRef
          .where('userUid', '==', userUid)
          .where('host', '==', true)
          .orderBy('concertDate', 'desc');
        break;
      default:
        query = concertsRef
          .where('userUid', '==', userUid)
          .orderBy('concertDate', 'desc');
    }
    try {
      let querySnap = await query.get();
      let concerts = [];

      for (let i = 0; i < querySnap.docs.length; i++) {
        let cncrt = await firestore
                            .collection('concerts')
                            .doc(querySnap.docs[i]
                              .data()
                              .concertId)
                            .get();
        concerts.push({...cncrt.data(), id: cncrt.id});
      }

      dispatch({type: FETCH_CONCERTS, payload: {concerts}});

      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
    }
  };