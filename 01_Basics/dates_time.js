// Dates

let myDate = new Date()
console.log("toString")
console.log(myDate.toString());
console.log("toDateString")
console.log(myDate.toDateString());
console.log("toISOString")
console.log(myDate.toISOString());
console.log("toJSON")
console.log(myDate.toJSON());
console.log("toLocaleDateString")
console.log(myDate.toLocaleDateString());
console.log("toLocaleString")
console.log(myDate.toLocaleString());
console.log("toTimeString")
console.log(myDate.toTimeString());
console.log("toUTCString")
console.log(myDate.toUTCString());


// specific date
console.log(" *************for specific date************")
// const mycreatedDate = new Date(2023,4,23,4,24) // FIRST METHOD
const mycreatedDate = new Date("2023-01-14") // SECOND METHOD YY/MM/DD
console.log(mycreatedDate.toLocaleString());
console.log("time stamps")
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreatedDate.getTime()); // it gives miliseconds from my date
console.log(Math.floor(Date.now()/1000)) // in seconds


// for taking date or time or day sigularly

console.log("only single thing access method")

let newDate = new Date()
console.log("Day=",newDate.getDay())
console.log("Month=",newDate.getMonth())
console.log("Date=",newDate.getDate())
console.log("Hours=",newDate.getHours())
console.log("Minutes=",newDate.getMinutes())


newDate.toLocaleString('default',{
    weekday:"long"
})