export const lengthValidation = (value, min, max) => {
  const trimmedValue = value.trim();
  return trimmedValue.length <= max && trimmedValue.length >= min;
};
