console.log("***********Arrays***************")


const myArr = [0,1,2,3,4,5] // first array num basis
const Heros = ["me","leo"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// arrays methods
// push method
console.log("push method")
myArr.push(6); // adding 6 in to myArr
console.log("after push method value is added",myArr);

//pop method
console.log("pop method")
myArr.pop(); // remove 6 in to myArr
console.log("after pop method last value is removed",myArr);

//unshift method
console.log("Unshift method")
myArr.unshift(9); // it add 9 on start of array and shift other values
console.log("after unshift method value is add to start and shift other values",myArr);


//shift method
console.log("shift method")
myArr.shift(); // it remove first value of array and shift other values
console.log("after shift method value is remove to start and shift other values",myArr);


// includes method 
console.log(myArr.includes(9)); // it check in an array that 9 is given or not
console.log(myArr.indexOf(2)); // Tell the index of value

// join array 
const newArr = myArr.join() // it bind the array and convert it into string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice method
console.log("slice method")
console.log("actual array:",myArr)
const myn1= myArr.slice(1, 3)
console.log("after slice array is:",myArr)
console.log("slice value: ",myn1)


// splice method
console.log("splice method")
console.log("actual array:",myArr)
const myn2= myArr.splice(1, 3)
console.log("after splice array is:",myArr)
console.log("splice value: ",myn2)