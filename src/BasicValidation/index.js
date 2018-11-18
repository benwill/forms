import React, { useReducer } from "react";
import "./index.css";

import reducer, {
  initialState,
  CHANGE_FIRSTNAME,
  CHANGE_SURNAME,
  CHANGE_FAVOURITE_FRUIT,
  CHANGE_PASSWORD1,
  CHANGE_PASSWORD2
} from "./reducer";

import useInput from "./hooks/useInput";
import useSelect from "./hooks/useSelect";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";

const opts = [
  { value: null, label: "None" },
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "pear", label: "Pear" }
];

function Form() {
  const [s, dispatch] = useReducer(reducer, initialState);
  const firstName = useInput("First ", s.firstname, dispatch, CHANGE_FIRSTNAME);
  const lastName = useInput("Surname", s.surname, dispatch, CHANGE_SURNAME);
  const password1 = useInput("Pw1", s.password1, dispatch, CHANGE_PASSWORD1);
  const password2 = useInput("Pw2", s.password2, dispatch, CHANGE_PASSWORD2);
  const fruit = useSelect("F", s.fruit, dispatch, CHANGE_FAVOURITE_FRUIT, opts);

  return (
    <div className="form-wrapper">
      <div className="form-wrapper--form">
        <form
          onSubmit={e => {
            alert(JSON.stringify(s, null, 2));
            e.preventDefault();
          }}
        >
          <FormInput {...firstName} />

          <FormInput {...lastName} />

          <FormSelect {...fruit} />

          <FormInput {...password1} />

          <FormInput {...password2} />

          <input type="submit" value="Submit" disabled={!s.isValid} />
        </form>
      </div>

      <div className="state">
        <pre>{JSON.stringify(s, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Form;
