import { FILTER_TASK, FILTER_TASK_SUCCESS } from "../Constants/filter";

const initialState = { listTask: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TASK_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };

    default:
      return state;
  }
};
export default reducer;
