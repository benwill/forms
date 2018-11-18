export default function useOnChangeTextInput(value, dispatch, type) {
  function onChange(e) {
    dispatch({
      type,
      value: e.target.value
    });
  }

  return {
    type: "text",
    value,
    onChange
  };
}
