import React from "react";

const FormInput = ({ label, onChange, onBlur, defaultValue, value, error }) => {
  return (
    <p>
      <label>{label}</label>
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
