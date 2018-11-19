import React from "react";
import reducer from "./reducer";
import useStep3 from "./useStep3";

function Step3({ onDone, onPrevious, form }) {
  const { state, onChangeSomethingElse } = useStep3(form);

  return (
    <div className="wizard-step">
      <p>
        <input value={state.somethingElse} onChange={onChangeSomethingElse} />
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
          onDone(state);
          e.preventDefault();
        }}
      >
        Finished
      </button>
    </div>
  );
}

export default Step3;
