// immediately invoked function expressions (IIFE)
// we have problem with global scope pollution so we use iife wrap the function in small brckets () and ()for execution
(function chai(){
    //named IIFE with name
    console.log("DB Connected"); 
})();

// ( () => {
    // simple IIFE without name
//     console.log("DB Connected Two");
    
// })()

// if we pass something
( (name) => {
    console.log(`DB Connected T ${name}`);
    
})("Saddam Ahmed Nisar Janjua")


// normal function

function one(){
    console.log("this is a normal function")
}
one();
// anonymous function
const disp = function (){
    console.log("this is anonymous function")
}
disp();

setTimeout(function(){
    console.log("this is annonymous with time")
},1500)

setTimeout(()=>{
    console.log("this is annonymous arrow function with time")
},2000)  