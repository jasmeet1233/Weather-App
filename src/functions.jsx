//after splitting, i will just check the date, so month and year wont be the picture
//want to make a array in which i will have 3 more arrays containing.

const currentDate = () => new Date().getDate(); //returns 8

function daysInThisMonth() {
  let now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
} //returns 31

const threeDays = (presentDate) => {
  let days = [presentDate, presentDate + 1, presentDate + 2];
  for (let i = 0; i < 3; i++) {
    if (days[i] > daysInThisMonth()) {
      days[i] = String(days[i] - daysInThisMonth()).padStart(2, "0");
    } else if (days[i] < 10) {
      const prepended_number = String(days[i]).padStart(2, "0");
      days[i] = prepended_number;
    } else {
      days[i] = String(days[i]);
    }
  }
  return days;
};
export const days2Display = threeDays(currentDate());

export const dataArr = (data, datesArr) => {
  let arr = [];
  for (let i = 0; i < datesArr.length; i++) {
    const inputArr = data.filter((itemObj) => {
      return itemObj.dt_txt.split(" ")[0].slice(-2) === datesArr[i];
    });
    arr = [...arr, inputArr[5] ? inputArr[5] : inputArr[1]];
  }
  return arr;
};

// Days //

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
export const daysArr = weekdays();