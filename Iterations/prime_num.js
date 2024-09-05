//// /////////////////prime number by single number input//////////////////////
// function primeNumber(num){
//   if(num<=1){
//      return `${num} this is not applicable`;
//   }

//   for(let i = 2; i<=Math.sqrt(num); i++){
//       if(num%i===0){
//           return `${num} is not a prime number`;   
//       } 

//   }
//       return `${num} is a prime number`;  

// }
// const result=primeNumber(7);
// console.log("result", result);


//////////////////// prime number check by giving range//////////////////////////////

// function primeNumCheck(start, end) {
//   for (let i = start; i <= end; i++) {
//     isPrime = true;
//     if (i < 2) {
//       continue;
//     }

//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i)
//     }
//   }

// }
// console.log(primeNumCheck(1, 100));

///////////////////////////////  with one loop ////////////////////////////////////////

function primeNumCheck(start, end) {
  console.log("loop entered",start, end)
  let result=start;
  console.log("loop entered1")
  let isPrime = false;
  console.log("loop entered2")

  for (let i = start; i <= end; i++) {
  console.log("loop entered3", i, result)

      if ( % i === 0) {
        console.log("loop entered4")
        isPrime = false;
      }
      else{
        isPrime = true;
        console.log(isPrime,result)
      }

}
}
console.log(primeNumCheck(1, 100))