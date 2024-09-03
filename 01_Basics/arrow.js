console.log("arrow function")

const user ={
    username:"saddam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        //console.log(this);
        
    }
}

user.welcomeMessage();
user.username="Ahmed";
user.welcomeMessage();
//console.log(this); // here it is an empty object in global but in browser window is a global object


//  const chai = function () {
//     let username = "janjua"
//   console.log(this.username); // when we call(this) inside it give alot of value but when outside it gives empty object
//  }

//we cant use this in single function that are not with object
//  const chai = ()=>{
//     let username = "janjua"
//     console.log(this); 
//  }

//  chai();



// basic arrow function
// const addTwoNum = (n1, n2)=>{
//        return n1+n2;
// }
// console.log(addTwoNum(5,5))


// implicit return
// const addTwoNum = (n1, n2)=> n1+n2;
//const addTwoNum = (n1, n2)=> (n1+n2)
const addTwoNum = (n1, n2)=> ({username: "janjua"})
console.log(addTwoNum(5,5))
//console.log(addTwoNum(3,2))
