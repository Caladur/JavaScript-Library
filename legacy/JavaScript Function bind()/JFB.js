// const person = {
//     name:"Od",
//     lastName: "Onlen",
//     fullName: function(){
//         return this.name + " " + this.lastName;
//     }
// }
// const member =  {
//     name: "Beren",
//     lastName: "Vergil"
// }
// let ma = person.fullName.bind(member)
// console.log(ma())

// const person = {
//     name : "Furkan",
//     lastName : "Saydur",
//     display : function(){
//         let x = document.getElementById("demo");
//         x.innerHTML = this.name + " " + this.lastName;
//     }
// }
// // person.display();
// let display = person.display.bind(person)
// setTimeout(display,2000);