import React, { useReducer } from "react";

import reducer, { CHANGE_ANOTHER_NAME } from "./reducer";

export default function useStep2(initialState) {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  return {
    state,
    onChangeAnotherName: e =>
      dispatch({ type: CHANGE_ANOTHER_NAME, value: e.target.value }),
  };
}
