// function myFunction(a,b){
//     return a*b;
// }
// // document.getElementById("demo").innerHTML = myFunction(24,5);
// document.getElementById("demo").innerHTML = window.myFunction(13,5);

// const person = {
//     name: "Furkan",
//     surname: "Saydur",
//     fullName: function(){
//         return this.name + " " +this.surname;
//     }
// }
// console.log(person.fullName());

function myFunction(arg1,arg2){
    this.firstName = arg1;
    this.lastName = arg2;
}

const man = new myFunction("Beren", "Vergil")
console.log(man.firstName)