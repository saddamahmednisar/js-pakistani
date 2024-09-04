console.log("Control flow of javascript")

//if condition

// const temprature = 42

// if(temprature<50){
//     console.log("less than 50")
// }
// else if(temprature==50){
//   console.log("temprature is equal to 50")
 
// }
// else{
//     console.log("greater than 50")
// }


// const balance = 460

// if (balance<500){
//   console.log("less than 500");
// }
// else if(balance<750){
//   console.log("less than 750");
// }
// else{
//   console.log("less than 1200");
  
// }





const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
  console.log("you can do shopping")
}
if (LoggedInFromEmail || LoggedInFromGoogle){
  console.log("user logged in");
  
}
else{
  console.log("you can't do shopping")
}