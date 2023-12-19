import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = { testTrueFalse: false, testHaveData: "data" };

const reducers = {
  [actions.testTrue]: (state) => {
    return { ...state, testTrueFalse: true };
  },
  [actions.testFalse]: (state) => {
    return { ...state, testTrueFalse: false };
  },
  [actions.testHaveData]: (state, action) => {
    return { ...state, testHaveData: action.payload };
  },
};

export default handleActions(reducers, initialState);
