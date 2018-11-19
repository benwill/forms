import React from "react";
import reducer from "./reducer";
import useStep1 from "./useStep1";

function Step1({ onNext, form }) {
  const { state, onChangeFirstName, onChangeSurName } = useStep1(form);


  debugger

  return (
    <div className="wizard-step">
      <p>
        <input value={state.firstname} onChange={onChangeFirstName} />
      </p>

      <p>
        <input value={state.surname} onChange={onChangeSurName} />
      </p>

      <hr />
      <button
        onClick={e => {
          onNext(state);
          e.preventDefault();
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Step1;
