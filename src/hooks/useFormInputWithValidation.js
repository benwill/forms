export default function useFormInputWithValidation(field, dispatch, type) {
  function onBlur(e) {
    dispatch({
      type,
      value: e.target.value
    });
  }

  return {
    type: "text",
    defaultValue: field.value,
    error: field.error,
    onBlur
  };
}
