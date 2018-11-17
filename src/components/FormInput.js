import React, { useReducer } from "react";

const FormInput = ({ onChange, onBlur, defaultValue, value, error }) => {
  console.log(error);
  return (
    <p>
      <input
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        defaultValue={defaultValue}
      />
      {error ? <span>Error</span> : null}
    </p>
  );
};

export default FormInput;
