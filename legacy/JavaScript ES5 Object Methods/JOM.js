// const person = {
//     name: "Beren",
//     lastName: "Vergil",
//     language: "Andal"
// };
// Object.defineProperty(person, "language", {value: "High Andal"});
// console.log(person.language);

// get: function(){return language}
// set: function(value){language = value};

// Object.defineProperty(person, "language", {writable : false});

// Object.defineProperty(person, "language", {enumerable : false});
// console.log(Object.getOwnPropertyNames(person))
// console.log(Object.keys(person));

// Object.defineProperty(person, "height", {value : 196});
// console.log(person.height);

// const person = {name:"Bilge Kurt", surname:"Saydur"};

// Object.defineProperty(person, "fullName", {
//     get: function(){
//         return this.name + " " + this.surname;
//     }
// });
// console.log(person.fullName);

const mudi = { counter: 0 };

Object.defineProperty(mudi, "reset", {
    get: function () { this.counter = 0; }
});
Object.defineProperty(mudi, "increment", {
    get: function () { this.counter++; }
});
Object.defineProperty(mudi, "decrement", {
    get: function () { this.counter--; }
});
Object.defineProperty(mudi, "add", {
    set: function(value){this.counter += value;}
});
Object.defineProperty(mudi, "subtract",{
    set: function(değer){this.counter -= değer}
});
mudi.reset;
mudi.add = 10;
mudi.subtract = 2;
console.log(mudi);