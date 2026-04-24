export const findTimeWindow = (inputDateStart, inputDateEnd) => {
  const timeStart = new Date(inputDateStart);
  const timeEnd = new Date(inputDateEnd);
  const localTime = new Date();

  if (localTime >= timeStart && localTime <= timeEnd) {
    return true;
  }
  return false;
};
