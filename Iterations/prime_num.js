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

// Recursive function to check if a number is prime
function isPrime(n, i = 2) {
    if (n <= 2) return n === 2;
    if (n % i === 0) return false;
    if (i * i > n) return true;
    return isPrime(n, i + 1);
}

// Function to find all prime numbers in a given range
function findPrimesInRange(start, end) {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);  // Output the prime number
        }
    }
}

// Example usage
findPrimesInRange(1, 20);