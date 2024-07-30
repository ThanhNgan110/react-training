export const checkIsEmpty = value => {
  return (
    value === null || (typeof value === 'string' && value.trim().length == 0)
  );
};
