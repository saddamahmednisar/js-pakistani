//objects
//there are two ways to declare object one  is constructor and sefcond is literal 
//singleton concept when make with constructor it is singleton but with literal not singleton
//object.create // we can also make object bys using this method
//object literals

const mySym=Symbol("key1") // symbol usage for keys

const JsUser ={
    name: "saddam",
    "full name": "saddam janjua",
    [mySym] : "mykey1", // actual syntax for declaring sym 
    age: 18,
    location: "Jaipur",
    email: "saddam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]  
}

//access of object
console.log(JsUser.email); // METHOD 1 (commonly used)
//console.log(JsUser["email"]); // Another Method when we name a key string in "" the first method odesnt access it
console.log (JsUser["full name"]);//this is declare in above object full name
console.log(JsUser[mySym])   