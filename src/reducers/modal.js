const {
  SHOW_MODAL,
  HIDE_MODAL,
  CHANGE_MODAL_TITLE,
  CHANGE_MODAL_CONTENT,
} = require("../Constants/modal");

const inititalState = {
  showModal: false,
  title: "",
  component: null,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case CHANGE_MODAL_TITLE:
      const { title } = action.payload;
      return {
        ...state,
        title,
      };
    case CHANGE_MODAL_CONTENT:
      const { component } = action.payload;
      return {
        ...state,
        component: component,
      };
    default:
      return state;
  }
};
export default reducer;
