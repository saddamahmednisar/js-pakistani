

const inputArray =[1,2,3,4,5,6,7,8]



function evenOddCheck(getArray){
      const evenNumber = getArray.filter(number=>number%2===0);
      const oddNumber = getArray.filter(number=>number%2!==0);
      return {evenNumber, oddNumber}

    
}
console.log(evenOddCheck(inputArray))

