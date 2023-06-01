export const fsaleTimer = (start, end) => {
  const now = new Date();
  const startedTime = new Date(start);
  const endedTime = new Date(end);

  let type = 0; //Dang dien ra
  if (now < startedTime) type = -1; //Sap dien ra
  else if (now > endedTime) type = 1; //Da ket thuc

  return type;
};

export const remainingTime = (end) => {
  const remain = new Date(end) - new Date();

  return hmsFormat(remain);
};

const hmsFormat = (timestamp) => {
  const timeInSec = timestamp / 1000;
  let hour = Math.floor(timeInSec / 3600);
  let min = Math.floor((timeInSec % 3600) / 60);
  let sec = Math.floor(timeInSec % 60);

  return { hour: zeroTen(Math.abs(hour)), min: zeroTen(Math.abs(min)), sec: zeroTen(Math.abs(sec)) };
};

export const zeroTen = (num) => (num >= 0 && num < 10 ? `0${num}` : num);
