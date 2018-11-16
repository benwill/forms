import React, { useReducer } from "react";
import "./index.css";

import reducer, {
  initialState,
  CHANGE_FIRSTNAME,
  CHANGE_SURNAME
} from "./reducer";
import useOnChangeTextInput from "../hooks/useOnChangeTextInput";

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const firstName = useOnChangeTextInput(
    state.firstname,
    dispatch,
    CHANGE_FIRSTNAME
  );
  const lastName = useOnChangeTextInput(
    state.surname,
    dispatch,
    CHANGE_SURNAME
  );

  return (
    <div className="form-wrapper">
      <div className="form-wrapper--form">
        <form
          onSubmit={e => {
            alert(JSON.stringify(state, null, 2));
            e.preventDefault();
          }}
        >
          <p>
            <input {...firstName} />
          </p>

          <p>
            <input {...lastName} />
          </p>

          <input type="submit" value="Submit" />
        </form>
      </div>

      <div className="state">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Form;
