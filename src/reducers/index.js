import { combineReducers } from "redux";
import taskReducer from "./task";
import loadingReducer from "./loading";
// import filterReducer from "./filter";
import modalReducer from "./modal";
import reducers from "../Tmp/reducer";

const rootReducer = combineReducers({
  task: taskReducer,
  loading: loadingReducer,
  // filter: filterReducer,
  modal: modalReducer,
  test: reducers,
});

export default rootReducer;
