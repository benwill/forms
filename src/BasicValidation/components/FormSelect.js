import React from "react";

const FormSelect = ({ label, onChange, value, options, error }) => {
  return (
    <p>
      <label>{label}</label>
      <select onChange={onChange} value={value}>
        {options.map(opt => {
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>

      {error ? <span>Error</span> : null}
    </p>
  );
};

export default FormSelect;
