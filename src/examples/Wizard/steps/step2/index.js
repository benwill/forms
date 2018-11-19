import React from "react";
import reducer from "./reducer";
import useStep2 from "./useStep2";

function Step2({ onNext, onPrevious, form }) {
  const { state, onChangeAnotherName } = useStep2(form);

  return (
    <div className="wizard-step">
      <p>
        <input value={state.anotherName} onChange={onChangeAnotherName} />
      </p>

      <hr />
      <button
        onClick={e => {
          onPrevious();
          e.preventDefault();
        }}
      >
        Previous
      </button>
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

export default Step2;
