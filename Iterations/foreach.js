//////////////FOR EACH LOOP////////////////////
console.log("For Each Loop");


const coding = ["cpp","js","py","css"]

// coding.forEach(function (item){
//     console.log(item);
    
// })


//by arrow function with for each


// coding.forEach((item) => {
//     console.log(item);
    
// });


// function PrintMe(item){
//  console.log(item);
 
// }
//  coding.forEach(PrintMe)

//  coding.forEach((item, index, arr) => {
//         console.log(item, index, arr);
//  })




// here we can access data which is in array and with in array we have objects and we get data from objects 
console.log("use of for each loop to get object item from array");


 const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
 ]

 myCoding.forEach((item)=>{
    console.log(item.languageName);
    
 })
 

 // here we all hacve functions for of, in, each to get data from array ,objects and from both