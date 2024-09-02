console.log("Functions in JavaScript")

function sayName(){
    console.log("S")
    console.log("A")
    console.log("D")
    console.log("D")
    console.log("A")
    console.log("M")
}
//sayName(); 

// function addTwoNumbers(n1, n2){
//     console.log(n1+n2);
// }

function addTwoNumbers(n1,n2){
    // let result = n1+n2
    // return result
    return n1+n2; // we can use both ways
}
const result = addTwoNumbers(3,4)
// console.log("Result: ", result)



function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter the username");
        
    } else{
    return `${username} just logged in`}
}

//console.log(loginUserMessage("saddam")); // if you set a default value it is not enter in if statement cz user is always not undefineda above

function calculateCartPrice(val1, val2,...num1){
     return num1
}
//console.log(calculateCartPrice(100,200,300,2000));
//passing an object to function
const user ={
    username: "saddam",
    price: 199
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

//handleObject(user);

//we can pass object p[assing to object like
handleObject({
    username:"sam",
    price: 399
})

// passing array to function
const myNewArray = [20,40,90]

function returnSecondValue(getArray){
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray)) // fisrt method we can pass value directly also
console.log(returnSecondValue([200,300,400]))