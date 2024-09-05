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

function primeNumCheck(start, end){
  for(let i=start ; i<=end ; i++){
    isPrime= true;
    if(i<2){
      continue;
    }

    for(let j=2; j<=Math.sqrt(i); j++){
      if(i%j===0){
        isPrime=false;
        break;
      }
    }
    if(isPrime){
      console.log(i)
    }
  }

}
console.log(primeNumCheck(1,100));






