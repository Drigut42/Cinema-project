const days = [
  "1Monday",
  "2Tuesday",
  "3Wednesday",
  "4Thursday",
  "5Friday",
  "6Saturday",
  "0Sunday",
];

function createDateObj(date) {
  const day1 = days
    .filter((str) => str.substring(0, 1) === date.getDay().toString())[0]
    .substring(1);

  const date1 = date.getDate();
  const month1 = date.getMonth();
  const year1 = date.getFullYear();

  return { day: day1, date: date1, month: month1, year: year1 };
}

//   Today
const today = new Date();
const todayDate = createDateObj(today);

// Tomorrow:
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const tomorrowDate = createDateObj(tomorrow);

// 7 Days:
const week = [todayDate, tomorrowDate];
// i = 2 because we have already the first 2 days
for (let i = 2; i <= 6; i++) {
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + i);
  const nextDayDate = createDateObj(nextDay);

  week.push(nextDayDate);
}

const todayDateString = `${todayDate.day} ${todayDate.date}.${todayDate.month}.${todayDate.year}`;
const tomorrowDateString = `${tomorrowDate.day} ${tomorrowDate.date}.${tomorrowDate.month}.${tomorrowDate.year}`;

export { todayDateString, tomorrowDateString, week };
