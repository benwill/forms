import { lengthValidation } from "./validation";

const CHANGE_FIRSTNAME = "changeFirstName";
const CHANGE_SURNAME = "changeSurname";
const CHANGE_FAVOURITE_FRUIT = "changeFavouriteFruit";
const CHANGE_PASSWORD1 = "changePassword1";
const CHANGE_PASSWORD2 = "changePassword2";

const initialState = {
  isValid: false,
  firstname: {
    value: "first",
    error: false
  },
  surname: {
    value: "",
    error: false
  },
  fruit: {
    value: "pear",
    error: false
  },
  password1: {
    value: "",
    error: false
  },
  password2: {
    value: "",
    error: false
  }
};

const validateFirstName = value => lengthValidation(value, 2, 10);
const validateSurname = value => lengthValidation(value, 3, 6);
const validatePassword = value => lengthValidation(value, 3, 10);

const isValid = state => {
  const { firstname, surname, password1, password2 } = state;
  return (
    validateFirstName(firstname.value) &&
    validateSurname(surname.value) &&
    validatePassword(password1.value) &&
    validatePassword(password2.value) &&
    password1.value === password2.value
  );
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
    case CHANGE_FAVOURITE_FRUIT: {
      const fruit = {
        value: action.value,
        error: false
      };
      return {
        ...state,
        isValid: isValid({ ...state, fruit }),
        fruit
      };
    }
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

    case CHANGE_PASSWORD1:
      const passwordsMatch1 = action.value === state.password2.value;
      const password1 = {
        value: action.value,
        error: !(validatePassword(action.value) && passwordsMatch1)
      };
      return {
        ...state,
        isValid: isValid({ ...state, password1 }),
        password1,
        password2: {
          ...state.password2,
          error: !(validatePassword(state.password2.value) && passwordsMatch1)
        }
      };

    case CHANGE_PASSWORD2:
      const passwordsMatch2 = action.value === state.password1.value;
      const password2 = {
        value: action.value,
        error: !(validatePassword(action.value) && passwordsMatch2)
      };
      return {
        ...state,
        isValid: isValid({ ...state, password2 }),
        password2,
        password1: {
          ...state.password1,
          error: !(validatePassword(state.password1.value) && passwordsMatch2)
        }
      };
    default:
      return { ...initialState };
  }
}

export {
  myFormReducer as default,
  initialState,
  CHANGE_FIRSTNAME,
  CHANGE_SURNAME,
  CHANGE_FAVOURITE_FRUIT,
  CHANGE_PASSWORD1,
  CHANGE_PASSWORD2
};
