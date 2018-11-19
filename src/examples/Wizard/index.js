import React, { useReducer } from "react";
import "./index.css";

import Step1 from "./steps/step1/index";
import Step2 from "./steps/step2/index";
import Step3 from "./steps/step3/index";

const NEXT_STEP = "nextStep";
const PREVIOUS_STEP = "previousStep";

function totalStateReducer(state = {}, action) {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        stepNumber: state.stepNumber + 1,
        form: { ...action.value }
      };
    case PREVIOUS_STEP:
      return { ...state, stepNumber: state.stepNumber - 1 };
    default:
      return state;
  }
}

function MainForm() {
  const [state, dispatch] = useReducer(totalStateReducer, {
    stepNumber: 1,
    form: {}
  });
  const onNext = newState => dispatch({ type: NEXT_STEP, value: newState });
  const onPrevious = () => dispatch({ type: PREVIOUS_STEP });
  const onDone = s => {
    alert(JSON.stringify({ ...state.form, ...s }, null, 2));
  };

  return (
    <div className="form-wrapper">
      <div className="form-wrapper--form">
        <div className="wizard">
          <nav>Current Step: {state.stepNumber}</nav>
          <hr />

          {state.stepNumber === 1 && (
            <Step1 form={state.form} onNext={onNext} />
          )}
          {state.stepNumber === 2 && (
            <Step2 onPrevious={onPrevious} form={state.form} onNext={onNext} />
          )}
          {state.stepNumber === 3 && (
            <Step3 onPrevious={onPrevious} form={state.form} onDone={onDone} />
          )}
        </div>
      </div>

      <div className="state">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default MainForm;
