import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../common/helper/notification";
import { FILTER_TASK_SUCCESS } from "../Constants/filter";
import {
  FETCH_TASK,
  FETCH_TASK_FAILED,
  FETCH_TASK_SUCCESS,
} from "../Constants/task";

const initialState = {
  listTask: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    case FETCH_TASK_SUCCESS: {
      const response = action.payload.data;
      toastSuccess(response);
      return {
        ...state,
        listTask: response,
      };
    }
    case FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: [],
      };
    }
    case FILTER_TASK_SUCCESS:
      const { data } = action.payload;
      console.log("🚀 ~ file: task.js:39 ~ reducer ~ data:", data)
      return {
        ...state,
        listTask: data,
      };

    default:
      return state;
  }
};

export default reducer;
