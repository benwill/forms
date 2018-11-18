export default function useFormInputWithValidation(label, field, dispatch, type) {
  function onBlur(e) {
    dispatch({
      type,
      value: e.target.value
    });
  }

  return {
    label,
    type: "text",
    defaultValue: field.value,
    error: field.error,
    onBlur
  };
}
