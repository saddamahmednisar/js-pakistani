////// for loop /////
console.log("For Loop")


for(i=0; i<=5; i++){
    console.log("HI!I am for loop")
}


// whilen loop
n=1;

while(n<=5){
    console.log("HI!I am while loop");
    n++;
}


////prime number
function primeNumber(start, end){
    for(let i= start; i<end ;i++){
       if(i%i==0){
        console.log(i)
       }
    }
    
}
primeNumber(1,10)