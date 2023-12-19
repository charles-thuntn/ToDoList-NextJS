import axiosServices from "./../common/services/axiosServices";
import { API_ENDPOINT } from "../Constants";

const url = "task";
export const getList = () => {
  return axiosServices.get(`${API_ENDPOINT}${url}`);
};
