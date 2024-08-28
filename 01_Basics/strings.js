const name= "saddam";// method to declare string
const gameName = new String("cricket");// second method to declare string
const repoCount = 50

//console.log (name + repoCount + "value")// we dont use this in modern days

// we prefer back tick and dollar sign to use string
console.log(`my name is ${name} and my repoCount is ${repoCount} and my game name is ${gameName}`)
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log (gameName.toLocaleLowerCase());
// console.log(gameName.concat());
console.log(gameName.charAt(0)); // character check using index
console.log(gameName.indexOf('t')); //index check by using character

const newString = gameName.substring(0,4)
console.log(newString)

// by usingf slice 
const newString1 = gameName.slice(-6,4) // itv accept the negative value but substring cant accept
console.log(newString1); // when give negative value it start reverse


// trim method
const newstring2= "    saddam     "
console.log(newstring2);
console.log(newstring2.trim())

// replace method

const url = "https://saddam.com/saddam%20janjua"
console.log( url.replace('janjua','ahmed'));
console.log(url.includes('saddam')) // check is this in url if yes then true if no then false
console.log(url.includes('choudary'))

// split method

const anotherString = "saddam-hc-com"
console.log(anotherString)
console.log(anotherString.split('-'));
