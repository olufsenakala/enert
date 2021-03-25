import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import concertReducer from "../../features/concert/concertReducer";

const rootReducer = combineReducers({
  test: testReducer,
  concerts: concertReducer
});

export default rootReducer;