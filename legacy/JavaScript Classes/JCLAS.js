// class Warriors{
//     constructor(height,weight,reach,race){
//         this.height = height;
//         this.weight = weight;
//         this.reach = reach;
//         this.race = race;
//     }
// }

// let warriorFusau = new Warriors(191,82,202,"human");
// console.log(warriorFusau)

// class Warrior {
//     constructor(height,weight,race) {
//         this.height = height;
//         this.weight = weight;
//         this.race = race;
//     }
//     bodyProp (){return this.height /2 + this.weight /2 }
// }
// let calla = new Warrior(231,950,"humanoid");
// console.log(calla.bodyProp())

class Car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year;
    }
}
let date = new Date();
let year = date.getFullYear();
let myCar = new Car("Mercedes","2021");
console.log("My car is", myCar.age(year),"years old.");