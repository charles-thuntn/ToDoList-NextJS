import { FILTER_TASK, FILTER_TASK_SUCCESS } from "../Constants/filter";

export const filterListTask = (keyword) => {
  return {
    type: FILTER_TASK,
    payload: { keyword },
  };
};

export const filterListTaskSuccess = (data) => {
  return {
    type: FILTER_TASK_SUCCESS,
    payload: { data },
  };
};
