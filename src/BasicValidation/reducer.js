import { lengthValidation } from "./validation";

const CHANGE_FIRSTNAME = "changeFirstName";
const CHANGE_SURNAME = "changeSurname";

const initialState = {
  isValid: false,
  firstname: {
    value: "",
    error: false
  },
  surname: {
    value: "",
    error: false
  }
};

const validateFirstName = value => lengthValidation(value, 2, 10);
const validateSurname = value => lengthValidation(value, 3, 6);

const isValid = state => {
  const { firstname, surname } = state;
  return validateFirstName(firstname.value) && validateSurname(surname.value);
};

function myFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIRSTNAME:
      const firstname = {
        value: action.value,
        error: !validateFirstName(action.value)
      };

      return {
        ...state,
        isValid: isValid({ ...state, firstname }),
        firstname
      };
    case CHANGE_SURNAME:
      const surname = {
        value: action.value,
        error: !validateSurname(action.value)
      };
      return {
        ...state,
        isValid: isValid({ ...state, surname }),
        surname
      };
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
