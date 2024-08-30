//const tinderUser = new Object() //first method to declare object
const tinderUser = {} // second method to declare object
tinderUser.id ="123abc"
tinderUser.name ="sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// nested objects
const regularUser = {
    email: "sam@gmail.com",
    fullname:{
        UserFullname:{
        firstname: "sam",
        lastname: "janjua"
    }
}   
}
//console.log(regularUser.fullname.UserFullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)  //one method
const obj3= {...obj1, ...obj2}
console.log(obj3)

// when you have data from api or database

const users=[
    {
        id: 1,
        email:'saddam@gmail.com'
    },
    {
        id: 2,
        email: 'janjua@gmail.com'
    },
    {
        id: 3,
        email:'ahmed@gmail.com'
    }
]
users[1].email
console.log(tinderUser);

console.log("keys:",Object.keys(tinderUser));
console.log("values:",Object.values(tinderUser));
console.log(Object.entries(tinderUser)) // it gives array of every entity

// when you have data from api or database but you want to check that is this instance is in this data or not cz when you start a loop and any instance is missing they will be crashing so we can manually check
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"))