export const findTimeWindow = (inputDateStart, inputDateEnd) => {
  const timeStart = new Date(inputDateStart);
  const TimeEnd = new Date(inputDateEnd);
  const localTime = new Date();
  console.log(localTime.getHours());

  if (localTime >= timeStart && localTime <= TimeEnd) {
    console.log("NU ER DEN INDEN FOR TIDEN");
    return true;
  } else false;
};
