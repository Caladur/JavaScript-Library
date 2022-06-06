// const person = {
//     name:"Tarhun",
//     surname: "Saydur",
//     language: "Andal",
//     get lang(){
//        return this.language;
//     }
// };
// document.getElementById("demo").innerHTML = person.lang;

// const indival = {
//     name:"Belen",
//     surname:"Saydur",
//     language: "Andal",
//     set lang(lang){
//         this.language = "lang";
//     }
// };
// document.getElementById("demo").innerHTML = indival.language;

// const persona = {
//     name : "Sun",
//     surname : "Saydur",
//     nationality : "German Andal",
//     get nation(){
//         return this.nationality.toUpperCase();
//     }
// };
// document.getElementById("demo").innerHTML = persona.nation;

// const singula = {
//     name: "Virtus",
//     surname: "Liberalis",
//     nationality: "",
//     set gens(gens){
//         this.nationality = gens.toUpperCase();
//     }
// };
// singula.gens = "Uhl";
// document.getElementById("demo").innerHTML = singula.nationality;

const obj = { counter: 0 };

Object.defineProperty(obj, "reset", {
    get: function () { this.counter = 0; }
});
Object.defineProperty(obj, "increment", {
    get: function () { this.counter++; }
});
Object.defineProperty(obj, "decrement", {
    get: function () { this.counter--; }
});
Object.defineProperty(obj, "add", {
    set: function (value) { this.counter += value; }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) { this.counter -= value; }
});
obj.reset;
obj.add = 25;
obj.subtract = 1;
obj.increment;
obj.decrement;

document.getElementById("demo").innerHTML = obj.counter;
