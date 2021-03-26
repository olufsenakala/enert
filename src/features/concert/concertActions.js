import { 
  CREATE_CONCERT, 
  UPDATE_CONCERT, 
  DELETE_CONCERT,
  FETCH_CONCERTS
} from "./concertConstants";
import { asyncActionStart, asyncActionError, asyncActionFinish } from '../async/asyncActions';
import { fetchSampleData } from '../../app/data/mockApi';
import { toastr } from 'react-redux-toastr';

export const createConcert = (concert) => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_CONCERT,
        payload: {
          concert
        }
      });
      toastr.success('Success!', 'Concert has been created');
    } catch (error) {
      toastr.error('Oops!', 'Something went wrong'); 
    }
  }
};

export const updateConcert = (concert) => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_CONCERT,
        payload: {
          concert
        }
      });
      toastr.success('Success!', 'Concert has been updated');
    } catch (error) {
      toastr.error('Oops!', 'Something went wrong'); 
    }
  }
};

export const deleteConcert = (concertId) => {
  return {
    type: DELETE_CONCERT,
    payload: {
      concertId
    }
  }
}

export const loadConcerts = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      const concerts = await fetchSampleData();
      dispatch({type: FETCH_CONCERTS, payload: {concerts}})
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError())
    }
  }
}