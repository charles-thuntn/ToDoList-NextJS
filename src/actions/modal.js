import {
  CHANGE_MODAL_CONTENT,
  CHANGE_MODAL_TITLE,
  HIDE_MODAL,
  SHOW_MODAL,
} from "../Constants/modal";

export const showModal = () => {
  return { type: SHOW_MODAL };
};

export const hideModal = () => {
  return { type: HIDE_MODAL };
};

export const changeModelTitle = (title) => {
  return { type: CHANGE_MODAL_TITLE, payload: { title } };
};

export const changeModelContent = (component) => {
  return { type: CHANGE_MODAL_CONTENT, payload: { component } };
};
