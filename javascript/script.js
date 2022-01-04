const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
let boxContent;
daily.addEventListener('click', getDailyReport);
weekly.addEventListener('click', getWeeklyReport);
monthly.addEventListener('click', getMonthlyReport);