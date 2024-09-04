function fizzbuzzdiv(start, end){
console.log("start",start)
console.log("end",end)

for(i=start ; i<=end ; i++){
  
    if(i%3==0){
        console.log("fizz")
    }
    else if(i%5==0){
        console.log("buzz")
    }
    else if(i%3==0 && i%5==0){
        console.log("fizz&buzz")
    }
    else{
        console.log(i)
    }
}
}
fizzbuzzdiv(1,100);