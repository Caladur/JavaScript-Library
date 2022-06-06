// try{
//     addelart("Welcome guest!")
// }
// catch(err){
//     document.getElementById("demo").innerHTML = err.message;
//     throw 499;
// };

// function getArea(width, height){
//     if (isNaN(height) || isNaN(width)) {
//         throw "Yanlış veri türü girdiniz!";
//     }
// }try{
//     getArea(3, "A");
// }catch(e){
//     console.error(e);
// }

// const array = ["ahmet, mehmet, fazıl, cemal"];
// let text = "";

// array.forEach(myFunction);

// function myFunction(array,index,value){
//     text += array + `<br>`;
//     console.log(text);
// }

// const number = [2, 4, 6];
// const number2 = number.map(myFunction);

// function myFunction(value,index,array){
//     return value*2;
// }

// console.log(number2);

// const number = [2, 5, 6, 19];
// const over18 = number.filter(myFunction);

// function myFunction(value, index, array){
//     return value > 18;
// };
// console.log(over18);

// const numbers = [42, 22, 1, 19, 2];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array){
//     return total+ value; 
// }
// console.log(sum);

// let greeting = person => {
//     let name = person ? person.name : `stranger` 
//     return `Howdy ${name}`
// };
// console.log(greeting({name: `Ahmet`}));

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let myCar = new Car("Ford", 2011);
document.getElementById("demo").innerHTML = "My car is " + myCar.age()+ " years old.";

class Car2{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year;
    }
}
let date = new Date();
let year = date.getFullYear();

let myCar2 = new Car2("Opel", 2019);
document.getElementById("demo2").innerHTML = "My car is " + myCar2.age(year) + " years old.";

