// Libraries
import { combineReducers } from "redux";
// Reducer
import { reducer } from "./reducer";

export const rootRreducer = combineReducers({
  app: reducer,
});
