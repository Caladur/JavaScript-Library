// const apples = {name:"Apples"};
// const pears =  {name:"Pears"};
// const bananas = {name:"Bananas"};

// const fruits = new Map();

// fruits.set("apples", 500)
// fruits.set("pears", 1000)
// fruits.set("bananas", 600)

// console.log(fruits)

// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("c");
// console.log(letters);

// class Car{
//     constructor(name,year){
//         this.name =name;
//         this.year =year;
//     }
// };

// const automotive = new Car("Ford", 2021);

// console.log(automotive);

// const myPromise = new Promise(function(myResolve,myReject){
//     setTimeout(function(){
//         myResolve("Sana aşığım!");
//     },2500);
//     setTimeout(function(){
//         myReject("Sana aşık değilim");
//     }, 2500);
// });
// myPromise.then(function(value){
//     document.getElementById("demo").innerHTML = value;
// },
//     function(err){
//         document.getElementById("demo").innerHTML = err;
//     }
// );

// const person = {
//     firstName: "Robert",
//     lastName: "Hunt",
//     height: 210,
//     weight: 120
// };

// let id = Symbol("id");
// person[id] = 222222;
// //Now person[id] = 222222
// //but person.id is still undefined!

// document.getElementById("demo").innerHTML = person[id] + " " + person.id;   

// function myFunction(x, y=20){
//     return x + y;
// };
// myFunction(13);

// document.getElementById("demo").innerHTML= myFunction(13);      //İçine bir değer girmezsek olmaz!

// function sum(...args){
//     let sum = 0;
//     for(let arg of args) sum+=arg;
//     return sum;
// }

// let x = sum(4,2,3,11,33,44,55);

// document.getElementById("demo").innerHTML = x;

// let x = Number.EPSILON;
// let x = Number.MIN_SAFE_INTEGER;
// let x = Number.MAX_SAFE_INTEGER;

// document.getElementById("demo").innerHTML = x;

const fruits