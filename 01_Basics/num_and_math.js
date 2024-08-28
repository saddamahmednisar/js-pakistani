////////////numbers//////////

const score = 400
console.log(score)

const balance = new Number(100) // it must define that this is number
console.log (balance)
console.log(balance.toString().length); // for checking length of number
//fixed
console.log("fixed")
console.log(balance.toFixed(2))
//Precision
console.log("precision")
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))

//toLocalString
console.log("toLocalString")
const hundereds=1000000
console.log(hundereds.toLocaleString())

////////////////MATHS////////////////////////

console.log("*******************Maths***************************")
console.log(Math)
console.log("abs")
console.log(Math.abs(-4)) // it convert neg value to positive
console.log("round")
console.log(Math.round(4.6))
console.log("ceil round")
console.log(Math.ceil(4.2)) // result is 5
console.log("floor round")
console.log(Math.floor(4.9)) // result is 4
console.log("Minimum Value in array")
console.log(Math.min(2,5,4,4,7))
console.log("Maxmimum Value in array")
console.log(Math.max(2,5,4,4,7))



// random
console.log("Random")
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
const max =20
const min = 10

console.log(Math.floor(Math.random()*(max-min+1))+min);
