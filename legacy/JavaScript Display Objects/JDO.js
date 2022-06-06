// const person = {
//     name:"Martin",
//     surname:"Luther",
//     nationality: "German",
//     height: "Average",
// }
// document.getElementById("demo").innerHTML = Object.values(person);
// let txt;
// for(let x in person){
//     txt += person[x] + " ";
// };
// for(let x in person){
//     txt +=person[x] + " ";
// }
// document.getElementById("demo").innerHTML = txt;
// const myArray = Object.values(person);
// document.getElementById("demo").innerHTML = myArray;
// myString = JSON.stringify(person)
// document.getElementById("demo").innerHTML = myString

// const person = {
//     name: "Furkan",
//     surname: "Saydur",
//     date: new Date()
// };
// myMan = JSON.stringify(person);
// document.getElementById("demo").innerHTML = myMan; 

// const person = {
//     name: "Adal",
//     surname: "Saydur",
//     nationality: "Andal",
//     height: 210,
//     weight: 120,
//     title: "Prince of Faren",
//     fullTitle: function(){
//         return this.title + " " + this.name + " " + this.surname;
//     }
// };
// person.fullTitle = person.fullTitle.toString();

// myMan = JSON.stringify(person);
// document.getElementById("demo").innerHTML = person.fullTitle(); //This a product of my antics :)

const arr = ["King of Dragons", "Dagonese Sir", "Ekke of Okal"];
myString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString;