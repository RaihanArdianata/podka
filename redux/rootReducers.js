import { combineReducers } from "redux";
import color from "./slices/exampleSlice";
import actionSheet from "./slices/actionSheetSlice";

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    actionSheet,
    color,
    ...asyncReducers,
  });

  /*
  Reset the redux store when user logged out
   */
  if (action.type === 'user/userLoggedOut') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;