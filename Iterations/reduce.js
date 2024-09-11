///////////REDUCE METHOD////////////////////////////
console.log("Reduce Method");

// normal function

// const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc, currval){
//     console.log(`acc: ${acc} currval: ${currval}`);
//     return acc + currval

// },0)

// console.log(myTotal);


// with arrow function


// const myNum = [1,2,3]

// const myTotal = myNum.reduce((acc, carval)=>(
//     acc + carval
// ),0)
// console.log(myTotal);


// example of reducer 
const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 3999
    },
    {
        itemName : "css course",
        price: 4999
    }
]

const TotalPriceToPay = shoppingCart.reduce((acc, item)=>( acc + item.price),0)
console.log("Total Bill:-",TotalPriceToPay);
