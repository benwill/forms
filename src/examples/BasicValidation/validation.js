export const lengthValidation = (value, min, max) => {
  const trimmedValue = value && value.trim();
  if(trimmedValue.length <= max && trimmedValue.length >= min) {
    return true;
  }
  return false;
};
