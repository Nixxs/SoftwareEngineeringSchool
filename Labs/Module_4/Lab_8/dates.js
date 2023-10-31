const moment = require('moment');
const momenttz = require("moment-timezone");

const now = moment();
const birthday = moment("1986-09-20");

// question 1
const daysSinceBday = now.diff(birthday, "days");
console.log(daysSinceBday);

// question 2
const monthsSinceBday = now.diff(birthday, "months");
const years = Math.floor(monthsSinceBday/12)
const remainingMonths = monthsSinceBday % 12;
const days = now.diff(birthday.add(years, "years").add(remainingMonths, "months"), "days");
console.log(`${years} years, months ${remainingMonths}, days ${days}`);

// question 3
function closestToNow(date1, date2){
    let diff1 = date1.diff(now,"days");
    let diff2 = date2.diff(now,"days");

    if (diff1 > diff2){
        console.log(date2.format("DD/MM/YYYY"));
    } else {
        console.log(date1.format("DD/MM/YYYY"));
    }
}
const anotherDate = moment("1997-05-03");
closestToNow(anotherDate, birthday);

// question 4
function beforeOrAfter(date1, date2){
    if (date1 > date2){
        console.log("Before");
    } else {
        console.log("After");
    }
}
beforeOrAfter(birthday, anotherDate);

// question 5
const timeInLondon = momenttz.tz("Europe/London");
console.log(timeInLondon.format("DD/MM/YYYY hh:mm:ss"))