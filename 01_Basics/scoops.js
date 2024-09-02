console.log("Scoops in javascript")


{}// this is basically scoop dont confuse to it that is also in object when it is with function or with if else then it is scoop
//var c = 300   // global scoop (outside the block)
let a = 300
if(true){
    let a= 10  // block scoop (inside the block)
    const b= 20
     //c = 30 //it throws an error cz it doest print globleb scoop
    //console.log("inner: ",a)

    }
//console.log(a);
//console.log(b);
//console.log(c);

// nested scoop

function one(){
    const username = "saddam"

    function two(){
        const website ="youtube"
        console.log(username);
    }
   // console.log(website)

    two()
}
//one(); 

if(true){
    const username = "saddam"
    if(username==="saddam"){
        const website =" youtube"
        //console.log(username + website)
    }
    //console.log(website);
    
}
//console.log(username)

//++++++++++++++++++interesting++++++++++++++++

function addone(num){
    return num +1
}
  const addedNumber=addone(5);

// we call it expression sometime we can also make function like this
const addTwo = function (num){                   
    return num +2
}

const twoplus = addTwo(5)
console.log("after added 1 in no is: ", addedNumber)
console.log("after added 2 in no is: ", twoplus)

// in first function addone that we make we can set at any place we can access it at any place before or afer initialization it doesn't give error but when you call addTwo above of the declaration it gives error we cant access it before initialization