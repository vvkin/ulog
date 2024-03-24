export const formatDateToDatetimeLocal = (date) => {
  return date.toISOString().substring(0, 16);
};
