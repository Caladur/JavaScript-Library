class Car {
    constructor(brand) {
        this.brand = brand;
    }
    static hello(x) {
        return "Hello! " + x.brand;
    }
}
let myCar = new Car("Tofaş");
// document.getElementById("demo").innerHTML = myCar.brand;
// document.getElementById("demo").innerHTML = Car.hello();
document.getElementById("demo").innerHTML = Car.hello(myCar);