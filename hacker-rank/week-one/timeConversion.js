/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

SPLIT time into Array
IF mod === am
  IF time.substring(0,2) === 12
    replace 12 w/ 00
  ELSE return time
ELSE
  IF time.substring(0,2) === 12
    return time
  ELSE replace w/ 12 + value
*/

function timeConversion(s) {
    let timeArray = s.split(":")
    const time = {
        hours: timeArray[0],
        minutes: timeArray[1],
        seconds: timeArray[2].slice(0,2),
        modifier: timeArray[2].slice(2,4)
    }
    
    if (time.modifier === "PM" && parseInt(time.hours) !== 12) {
        time.hours = String(parseInt(time.hours) + 12)
    } else if (time.modifier === "AM" && parseInt(time.hours) === 12) {
        time.hours = "00"
    }
     return `${time.hours}:${time.minutes}:${time.seconds}`
    
}


console.log(timeConversion("12:01:00AM"))
console.log(timeConversion("04:01:00PM"))
console.log(timeConversion("04:01:00AM"))
console.log(timeConversion("07:05:45PM"))


// function timeConversion(s) {
//     let mod = s.slice(-2)
//     let hour = s.slice(0,2)
//     let minSec = s.slice(2,8)

//     if (mod === "PM" && hour !== "12") {
//         hour = String(parseInt(hour) + 12)
//     } else if (mod === "AM" && hour === "12") {
//         hour = "00"
//     }

//     return `${hour}${minSec}`
// }