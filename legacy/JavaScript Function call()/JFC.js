// const person = {
//     fullName: function () {
//         return this.name + " " + this.lastName;
//     }
// }
// const person2 = {
//     name: "Beren",
//     lastName: "Vergil"
// }
// const person3 = { name: "Furkan", lastName: "Saydur" }

// console.log(person.fullName.call(person2))

const theperson = {
    fullName: function (height, weight) {
        return this.name + " " + this.lastName + " " + height + " " + weight;
    }
}
const person = {name:"Fred", lastName: "Ahala"}

console.log(theperson.fullName.call(person, 198, 101))