import { onLoading } from "../actions/loading";
import { OFF_LOADING, ON_LOADING } from "../Constants/task";

const initialState = {
  onloading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOADING:
      return {
        ...state,
        onLoading: true,
      };

    case OFF_LOADING:
      return {
        ...state,
        onLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
