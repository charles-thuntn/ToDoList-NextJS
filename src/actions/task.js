import * as taskAPIs from "../apis/task";
import {
  FETCH_TASK,
  FETCH_TASK_FAILED,
  FETCH_TASK_SUCCESS,
} from "../Constants/task";

/*Dùng redux- thunk */
export const fetchListTaskRequest = () => {
  return (dispatch) => {
    dispatch(fetchListTask());
    taskAPIs
      .getList()
      .then((response) => {
        dispatch(fetchListTaskSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        dispatch(fetchListTaskFailed(error));
        console.log(error);
      });
  };
};

export const fetchListTask = () => {
  return {
    type: FETCH_TASK,
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: FETCH_TASK_SUCCESS,
    payload: { data },
  };
};

export const fetchListTaskFailed = (error) => {
  return {
    type: FETCH_TASK_FAILED,
    payload: { error },
  };
};
