/////////////////////Fibonacci Series/////////////////////////

let num = 10
let n1=0, n2=1, nextNum;

console.log('fibonacci series')

for(let i=1; i<=num; i++){
    console.log(n1);
    nextNum=n1+n2;
    n1=n2;
    n2=nextNum;
}

