console.log("object map");
const myObject ={
    js:'Javascript',
    py:'Python',
    cpp:'C++',
    css:'cascading style sheet'

}

for(const key in myObject){
    //console.log(`${key} is a shortcut fot ${myObject[key]}`)   
}
// in for of loop when we use it in array it print the value now check for in loop in array 

const programming = ["cpp", "js","py","css"]

for(const key in programming){
    console.log(`${key} is a key of ${programming[key]}`);
}

// so after checking using for in loop it also give the key and when we want values it also give values