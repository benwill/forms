export default function useFormSelect(label, field, dispatch, type, options) {
  function onChange(e) {
    dispatch({
      type,
      value: e.target.value
    });
  }

  return {
    label,
    value: field.value,
    error: field.error,
    onChange,
    options
  };
}
