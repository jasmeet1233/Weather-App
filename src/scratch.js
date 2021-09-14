const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
const dayName = days[d.getDay()];

const weekdays = () => {
  let i = days.indexOf(dayName);
  const daysArr = [];
  for (let z = 0; z < 3; z++) {
    if (i > 6) {
      daysArr.push(days[0]);
      i = 1;
    } else {
      daysArr.push(days[i]);
      i++;
    }
  }
  return daysArr;
};
const daysArr = weekdays();



/// -- {parseFloat(temp - 273.15).toFixed(2)}