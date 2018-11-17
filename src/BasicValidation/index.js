import React, { useReducer } from "react";
import "./index.css";

import reducer, {
  initialState,
  CHANGE_FIRSTNAME,
  CHANGE_SURNAME
} from "./reducer";
import useFormInputWithValidation from "../hooks/useFormInputWithValidation";
import FormInput from "../components/FormInput";

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const firstName = useFormInputWithValidation(
    state.firstname,
    dispatch,
    CHANGE_FIRSTNAME
  );
  const lastName = useFormInputWithValidation(
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
          <FormInput {...firstName} />

          <FormInput {...lastName} />

          <input type="submit" value="Submit" disabled={!state.isValid} />
        </form>
      </div>

      <div className="state">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Form;
