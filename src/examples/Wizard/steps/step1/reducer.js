const CHANGE_FIRSTNAME = "changeFirstName";
const CHANGE_SURNAME = "changeSurname";

function step1(state, action) {
  switch (action.type) {
    case CHANGE_FIRSTNAME:
      return { ...state, firstname: action.value };
    case CHANGE_SURNAME:
      return { ...state, surname: action.value };
    default:
      return state;
  }
}

export {
  step1 as default,
  CHANGE_FIRSTNAME,
  CHANGE_SURNAME
};