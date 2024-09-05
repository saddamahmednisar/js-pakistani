////////////////Factorial of number///////////////////

const num = 5;
if(num==0){
    console.log(`Factorial of ${num} is 1`); 
}
else if (num<0){
    console.log("there is no factorial of newgative number");   
}
else{
    let fact=1;
    for(let i=1; i<= num; i++ ) {
        fact=fact*i
    }
    console.log(`Factorial of ${num} is ${fact}`);
    
}




