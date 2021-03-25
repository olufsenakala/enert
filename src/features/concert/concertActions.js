import { CREATE_CONCERT, UPDATE_CONCERT, DELETE_CONCERT } from "./concertConstants";

export const createConcert = (concert) => {
  return {
    type: CREATE_CONCERT,
    payload: {
      concert
    }
  }
}

export const updateConcert = (concert) => {
  return {
    type: UPDATE_CONCERT,
    payload: {
      concert
    }
  }
}

export const deleteConcert = (concertId) => {
  return {
    type: DELETE_CONCERT,
    payload: {
      concertId
    }
  }
}