// Hjælpefunktion til at formatere timestamp til timevisning (fx '08:00')
// Bruges til at vise tidspunkter i UI på en ensartet måde
export const formatTime = (timeStamp) => {
  const timeDate = new Date(timeStamp);
  let hours = timeDate.getHours();
  let timeString = "";
  if (hours < 10) {
    timeString = "0" + hours + ":" + "00";
  } else timeString = hours + ":" + "00";
  return timeString;
};
