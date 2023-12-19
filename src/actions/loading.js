import { OFF_LOADING, ON_LOADING } from "../Constants/task";

export const onLoading = () => {
  return {
    type: ON_LOADING,
  };
};
export const offLoading = () => {
  return {
    type: OFF_LOADING,
  };
};
