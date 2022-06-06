// class Car {
//     constructor(name) {
//         this.carname = name;
//     }
//     present() {
//         return "I have a" + " " + this.carname;
//     }
// }
// class Model extends Car {
//     constructor(carname, mod) {
//         super(carname);
//         this.mod = mod;
//     }
//     show() {
//         return this.present() + " " + "and it is a" + " " + this.mod;
//     }
// }
// let myCar = new Model("Tesla", "Model S");
// console.log(myCar)
// console.log(myCar.show())

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     get carName(){
//         return this.name;
//     }
//     set carName(x){
//         this.name = x;
//     }
// }   
// let myCar = new Car("Toyota");
// console.log(myCar.carName)
// myCar.carName = "Fiat"
// console.log(myCar.carName)

class Car {
    constructor(brand){
        this._carName = brand;
    }
    get carName(){
        return this._carName;
    }
    set carName(x){
        this._carName = x;
    }
}
let myCar = new Car("Saydur");
myCar.carName = "Ford";
console.log(myCar)