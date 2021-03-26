import {createReducer} from '../../app/common/util/reducerUtils';
import { 
  CREATE_CONCERT, 
  UPDATE_CONCERT, 
  DELETE_CONCERT,
  FETCH_CONCERTS
} from './concertConstants';

const initialState = [];

const createConcert = (state, payload) => {
  return [...state, payload.concert]
}

const updateConcert = (state, payload) => {
  return [
    ...state.filter(concert => concert.id !== payload.concert.id), 
    payload.concert
  ]
}

const deleteConcert = (state, payload) => {
  return [
    ...state.filter(concert => concert.id !== payload.concertId)
  ]
}

const fetchConcerts = (state, payload) => {
  return payload.concerts
}

export default createReducer(initialState, {
  [CREATE_CONCERT]: createConcert,
  [UPDATE_CONCERT]: updateConcert,
  [DELETE_CONCERT]: deleteConcert,
  [FETCH_CONCERTS]: fetchConcerts
})