// var person = {
//     name: "Furkan",
//     surname: "Saydur",
//     language: "NO",
//     get lang(){
//         return this.language;
//     },
//     set lang(value){
//         this.language= value;
//     }
// };
// person.lang = "tr"; // Burada set'e değer gönderiyoruz çünkü set içerisinde language'i value'e eşit yapmıştık. Bir nevi value'yi tayin etmiş oluyoruz.

// document.getElementById("demo").createt = person.lang;
// document.getElementById("demo").innerText = person.lang;
// document.getElementById("demo").firstChild.nodeValue = person.lang;

// var person2 ={
//     name:"Ahmet",
//     surname:"Kesin",
//     language:"NO",
//     set lang(value){
//         this.language = value.toUpperCase; //If someone does not put () after toUpperCase then someone does not actually call toLowerCase or toUpperCase in conditions. We are referencing them, so we get the default string representation of the functions.
//     }
// };
// person2.lang = "fr";

// document.getElementById("demosec").innerHTML = person2.language;

// var person = {
//     name: "Faruk",
//     surname: "Ziya",
//     language: "NO",
// };

// Object.defineProperty(person, "language",{
//     value: "TR",
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// //Enumerating an Object
// var txt = " ";
// for(var x in person){
//     txt += person[x] + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;

//This second one removes enumeration from the object

// var person = {
//     name: "Faruk",
//     surname: "Ziya",
//     language: "NO",
// };

// Object.defineProperty(person, "language",{
//     value: "TR",
//     writable: true,
//     enumerable: false,
//     configurable: true
// });

// //Enumerating an Object
// var txt = " ";
// for(var x in person){
//     txt += person[x] + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;

// var person = {
//     name: "Ali",
//     surname: "Suabi",
//     language: "NO"
// };

// Object.defineProperty(person, "language",{      //Eğer language'den sonra virgül koyulmazsa sentaks hatası alınır.
//     get: function(){return language},
//     set: function(value){language=value=toUpperCase()}    
// });

// person.language = "tr";

// document.getElementById("demo").innerHTML = person.language;

// var person = {
//     name:"Furkan",
//     surname: "Saydur",
//     age : 19
// }

// const person = {
//     firstName: "Fazıl",
//     lastName:"Kıran",
//     fullName: function(){
//         return this.firstName + " "+ this.lastName;
//     }
// };
// const member = {
//     firstName:"Cemal",
//     lastName:"Okcuoglu",
// };

// let fullName = person.fullName.bind(member)
// console.log(fullName());
// document.getElementById("demo").innerHTML = fullName();     //Yukarıda belirtildiği üzere eğer fonksiyon olduğu söylenmez ise o zaman native kod hatası ortaya çıkar.


