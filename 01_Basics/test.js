console.log("Saddam")
console.log(2+2)

// const myFunction = function(){
//     console.log("data entered")
// }
//let score = 33
//let score = "33" 

let score = "33abc"  
console.log(typeof score)
console.log (typeof(score));

// convert number
console.log("convert number");
let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber);

// convert boolean
console.log("convert boolean");
let isLoggedIn = "saddam" // 0=>false, 1=>true, ""=>false, "saddam"=>true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


//convert string
console.log("convert string");
let someNumber = 34
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


let value = 3
let negvalue = - value
console.log(negvalue)

let str1 = "hello";
let str2= " saddam";
let str3 = str1 + str2;
console.log("complete string", str3)

//string comparison
console.log("string comparison");
console.log("1" + 2) //=>12
console.log(1 +"2") //=>12
console.log("1" +2+2) //=>122 it take all string cz its fisrt number is string
console.log(1+2+"2") //=>32 in this coversion fisrt and then string

// prefix and postfix
console.log("prefix and postfix");
let gamecounter = 100
gamecounter ++;
console.log(gamecounter );

//null
console.log("null comparison");
console.log("2" > 1);//=>true
console.log(null > 0);//=>false it take null as 0
console.log(null == 0);//=>false it take null as 0

// undefined
console.log("undefined comparison");
console.log(undefined>0) //=>false
console.log(undefined>=0)//=>false
console.log(undefined==0)//=>false

//strict check
console.log("strict check");
console.log("2" === 2);

console.log("non primitive example");
const student= ["saddam", "ahmed", "nisar"]
let myObj={
name : "saddam",
age: 23
}
const myFunction = function(){
console.log("hy adrem team");
}


console.log(2+2+"2")
////////////////////////////////////////////////////////////

//  const getname = function (name){
//     return name;
//  }

//  const age = function(age){
//     return age;
//  }

 //strings in js
