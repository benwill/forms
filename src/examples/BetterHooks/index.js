import React from "react";
import "./index.css";
import useMyForm from "./hooks/useForm";

function Form() {
  const { state, onChangeFirstName, onChangeSurName } = useMyForm({
    firstname: "Joe",
    surname: "Bloggs"
  });

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
            <input value={state.firstname} onChange={onChangeFirstName} />
          </p>

          <p>
            <input value={state.surname} onChange={onChangeSurName} />
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
