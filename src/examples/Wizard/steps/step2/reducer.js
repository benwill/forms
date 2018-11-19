const CHANGE_ANOTHER_NAME = "changeAnotherName";

function step2(state, action) {
  switch (action.type) {
    case CHANGE_ANOTHER_NAME:
      return { ...state, anotherName: action.value };
    default:
      return state;
  }
}

export {
  step2 as default,
  CHANGE_ANOTHER_NAME
};