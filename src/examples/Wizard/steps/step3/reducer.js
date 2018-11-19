const CHANGE_SOMETHING_ELSE = "changeSomethingElse";

function step1(state, action) {
  switch (action.type) {
    case CHANGE_SOMETHING_ELSE:
      return { ...state, somethingElse: action.value };
    default:
      return state;
  }
}

export {
  step1 as default,
  CHANGE_SOMETHING_ELSE
};