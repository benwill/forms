import { useReducer } from "react";

import reducer, { CHANGE_SOMETHING_ELSE } from "./reducer";

export default function useStep3(initialState) {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  return {
    state,
    onChangeSomethingElse: e =>
      dispatch({ type: CHANGE_SOMETHING_ELSE, value: e.target.value })
  };
}
