const userEmail = []


if (userEmail){
    console.log("got your email")
}
else{
    console.log("dont have user email");
    
}



// Falsy values
// false, 0 , -0,BigInt 0n, "" , null, undefined, NaN

// Thruthy Values
// "0" , 'false', " ", [], {}, function(){}
// 0 in string is truthy and false in string , space in inverted commas is also truty


// if array [] is empty how can we check
if (userEmail.length===0){
    console.log("array is empty");
}

// if object {} is empty how can we check
const emptyObject ={}
if(Object.keys(emptyObject).length===0){
    console.log("object is empty");  
}

// console.log("fizz");
// console.log("buzz");
// console.log("fizz&buzz")




//Nullish coalescing operator(??): null undefined 
let val1;
//val1= 5 ?? 10
//val1= null ?? 10
//val1 = undefined ?? 15
val1 = undefined ??10??15
console.log(val1);




// terniary operator
//consition?true:false

const iceTeaPrice = 70
iceTeaPrice<=80 ? console.log("small icecream"):console.log("bigger icecream");

