import { useReducer } from "react";

import reducer, { CHANGE_FIRSTNAME, CHANGE_SURNAME } from "./reducer";

export default function useMyForm(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    onChangeFirstName: e =>
      dispatch({ type: CHANGE_FIRSTNAME, value: e.target.value }),
    onChangeSurName: e =>
      dispatch({ type: CHANGE_SURNAME, value: e.target.value })
  };
}
