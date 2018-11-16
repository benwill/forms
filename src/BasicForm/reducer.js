const CHANGE_FIRSTNAME = "changeFirstName";
const CHANGE_SURNAME = "changeSurname";

const initialState = {
  firstname: "Joe",
  surname: "Blogs"
};

function myFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIRSTNAME:
      return { ...state, firstname: action.value };
    case CHANGE_SURNAME:
      return { ...state, surname: action.value };
    default:
      return { ...initialState };
  }
}

export {
  myFormReducer as default,
  initialState,
  CHANGE_FIRSTNAME,
  CHANGE_SURNAME
};
