// const coding =["js","py","css","html"]

// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item          // it return undefined for each loop return nothing
// });

// console.log(values);   


// filter method usage
//const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNum = myNum.filter((num)=>num<5) // if we use {} then we must write the return
//  const newNum = myNum.filter ((num)=>{
//     return num<5
//  })
// console.log(newNum);

// if we want to use for each with {}

// const newNum = []
// myNum.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num);
//     }

// });
// console.log(newNum);



const books =[
{
    title: 'book-one' , genre: 'Fiction', publish:1999, edition:2004
},
{
    title: 'book-two' , genre: 'Non-Fiction', publish:2000, edition:2016
},
{
    title: 'book-three' , genre: 'Science', publish:1989, edition:1999
},
{
    title: 'book-four' , genre: 'History', publish:1990, edition:2000
},
{
    title: 'book-five' , genre: 'Fiction', publish:2015, edition:2023
},
{
    title: 'book-six' , genre: 'Science', publish:2010, edition:2019
},
{
    title: 'book-seven' , genre: 'History', publish:2011, edition:2015
},
{
    title: 'book-eight' , genre: 'Non-Fiction', publish:2008, edition:2014
}
]

let userBooks = books.filter((bk)=>bk.genre ==="History")

userBooks = books.filter ((bk)=>{ 
    return bk.publish >= 2000 && bk.genre === "History"
})
console.log(userBooks);
// when we use brackets we must use return