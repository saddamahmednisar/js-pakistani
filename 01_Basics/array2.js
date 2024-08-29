const marvel_heros = ["spiderman", "ironman","flash"]
const pak_heros =["shan","afridi","quaid"]

//marvel_heros.push(pak_heros); // we dont use this cz it take pak heros as 4 elemment
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// we want merging of both arrays
// concat method
const allheros = marvel_heros.concat(pak_heros);
console.log("allheros",allheros)

// spread method (work like concat method)
console.log("spread method (work like concat method)")
const newallheros= [...marvel_heros, ...pak_heros] 
console.log("newallheros spread method",newallheros)


// flat method
console.log("Flat Operator")
const another_array = [1,2,3,[4,5,6],7,[4,5,6]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


// when we get data through apis it is may be string or number but we want array we can check it 

console.log(Array.isArray("saddam")) // it check the data is array or not
console.log(Array.from("saddam")); // this convert it into array if not


//  if we have multiple value we can use Array.of instead of from

let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2 ,score3))
