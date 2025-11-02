// Steps
const perHourWage = prompt('How much are you earning per hour?');
const hours = prompt('How many hours are you working a day?');
const perDay = perHourWage * hours;
console.log(`Per day, you earn: $${perDay}`);

// Weekly Salary
const day = prompt('How many days are you working a week?');
const perWeek = perDay * day;
console.log(`Per week, you earn : ${perWeek}`);

// Monthly Salary
const weekWorked = prompt('How many weeks are you working a month?');
const perMonth = perWeek * weekWorked;
console.log(`Per month, you earn : ${perMonth}`);