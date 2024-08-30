console.log("destructuring of data")

const course ={
    coursename:'js in pakistan',
    price: "999",
    courseInstructor: "Saddam Janjua"
}

//course.courseInstructor  // we can also access with this method
// another way to access the instances in course a great method
 const{courseInstructor: instructor}=course
 //console.log(courseInstructor) // we can call by this but when give name in curly braces then call that name
console.log(instructor); //here is the name in above we mentioned


// basic apis how api call from json or with json

// {
//     "name": "saddam"
//     "coursename":"js in pakistan",
//     "price": "free"
// }


// sometime  api's are in array format 
[
    {},
    {},
    {}
]