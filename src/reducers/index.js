import { combineReducers } from "redux";
import { searchReducer } from "./search";

const appReducers = combineReducers({
  issues: searchReducer,
});

const reducers = (state, action) => {
  return appReducers(state, action);
};

export default reducers;
