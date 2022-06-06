// const names = ["Ahmet","Buket","Cemal"];
// let finder = names.indexOf("Cemal") + 29;
// console.log(finder)

// const newLocal = {
//     name: "Robert",
//     surname: "Redeker",
//     age: 18,
//     height: 195,
//     weight: 92
// };
// const values = [11,22,14,15];
// let test = values.every(myFunction);

// function myFunction(value, _index, _array){
//     return value > 15;
// }
// myFunction();

// const names = ["Ahmet","Burak","Cemal"];
// let test = Array.from(names);
// console.log(test)
// console.log(typeof(test))

// function newFunction(a,b,c,d) {
//     let Person = {
//         constructor(a,b,c,d){
//             this.name= "a"
//             this.surname= "b"
//             this.gno= 2
//             this.eo= 1
//         }
//     }
//     const applicant = Person;
//     if (applicant.gno > 480) {
//         return "Tebrikler! Özel başvuru hakkı kazandınız."
//     } else if (applicant.gno < 480 && applicant.eo > 95) {
//         return "Eğitim görevlileri tarafından sizinle iletişime geçilecektir."
//     } else {
//         return "Maalesef gereksinimleri sağlayamadınız fakat tekrar deneme fırsatlarından yararlanabilirsiniz. Bunun için lütfen mail adresinizi giriniz."
//     }
// }
// console.log(newFunction("Ahmet", "Vefikbey",475, 65));  //Çalıştı fakat içeriye Person Constructor yapılarak işlevi artırılabilir.

// const testSet = new Set()
// testSet.add("Furkan");
// testSet.add("Korkut");
// console.log(testSet);
// console.log(testSet.has(1));
// console.log(testSet.values());
// console.log(testSet.keys());    //Bir set, keys içermez.

// const testMap = new Map();
// testMap.set("West Coast Love", 1);
// console.log(testMap.entries());
// console.log(testMap.size);

// const test = "";
// console.log(test.app);  //Undefined gelir.

// let test1 = "Hello!";
// let test11 = Number(test1);
// console.log(test11);
// let test2 = 4;
// let test22 = String(test2);
// console.log(test22)
// let test221 = toString(test2);
// console.log(test221);

// console.log(2+2 == 4)
// console.log(2+2 == 5)

// let test1 = 2+2 == 4;       
// console.log(String(test1));
//Boolean data type has been changed to String.

// let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, esse? Quam fugit adipisci maxime laborum culpa"
// let pattern = /consectetur/i;
// let result = text.match(pattern);
// console.log(result)

// let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, esse? Quam fugit adipisci maxime laborum culpa"
// let pattern = /consectetur/i;
// let result = text.search(pattern);
// console.log(result)

// let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, esse? Quam fugit adipisci maxime laborum culpa."
// let pattern = /consectetur/m;
// let result = text.replace(pattern);
// console.log(result);

// let test = /a/.test("Ne mutlu Türk'üm diyene!");
// console.log(test);  

// let test = /g/.exec("Benim kaderim benim seçimim.");
// console.log(test)

// let test1 = /a/.exec("Benim kaderim benim seçimim.");
// console.log(test1)

// try{
//     ramp("Hoş geldin!");
// }
// catch(err){
//     document.getElementById("demo").innerHTML = err.message;
// }
//It worked as intended. It should like this way.

// function newFunction(x, y){
//     try {
//         x * y;
//     }
//     catch (err) {
//         document.getElementById("demo").innerHTML = err.message;
//     }
//     if (x > 5) {
//         throw "Too big";
//     }
// }
// console.log(newFunction());

// function myFunction() {
//     let outcome = document.getElementById("resultas");
//     outcome.innerHTML = ""; 
//     let figure = document.getElementById("area").value;
//     try {
//         if (figure < 1 || figure > 9) throw "Uygun aralıkta bir sayı giriniz.";
//         if (isNaN(figure)) throw "Lütfen bir sayı giriniz.";
//         figure = Number(figure);
//         if (figure == "") throw "Lütfen bir sayı giriniz.";
//     }
//     catch (err) {
//         outcome.innerHTML = "Sorun." + " " + err;
//     }
// }

// function myFunction() {
//     let outcome = document.getElementById("resultas");
//     outcome.innerHTML = ""; 
//     let figure = document.getElementById("area").value;
//     try {
//         if (figure < 1 || figure > 9) throw "Uygun aralıkta bir sayı giriniz.";
//         if (isNaN(figure)) throw "Lütfen bir sayı giriniz.";
//         figure = Number(figure);
//         if (figure == "") throw "Lütfen bir sayı giriniz.";
//     }
//     catch (err) {
//         outcome.innerHTML = "Sorun." + " " + err;
//     }
//     finally{
//         document.getElementById("area").value = "";
//     }
// }

// let myFunction = (a ,b) => a*b;
// console.log(myFunction(1,2));

// class Companies {
//     constructor(name, sector, group, owner){
//         this.name = name;
//         this.sector = sector;
//         this.group = group;
//         this.owner = owner;
//     }
// }
// let subject1 = new Companies("Leapex","Technology","VergilInc","Beren Vergil")
// console.log(subject1); 

// import height from "./rehearsal-module";
// import {name} from "./rehearsal-module";

// console.log(name);

// let testOne = '{"players" : [' +
// '{ "firstName": "Beren", "stats": "100" },' +
// '{ "firstName": "Zion", "stats": "95" },' +
// '{ "firstName": "Furkan", "stats": "96" }]}';

// const stuff = JSON.parse(testOne);

// document.getElementById("demo").innerHTML = stuff.players[0].firstName + " " + stuff.players[0].stats;

// let testOne = '{"players" : [' +
// '{ "firstName": "Beren", "stats": "100" },' +
// '{ "firstName": "Zion", "stats": "95" },' +
// '{ "firstName": "Furkan", "stats": "96" }]}';

// const stuff = JSON.parse(testOne);

// debugger; document.getElementById("demo").innerHTML = stuff.players[0].firstName + " " + stuff.players[0].stats;

// const player = {name: "Beren", surname: "Vergil", height: 211, weight: 120};
// document.getElementById("demo").innerHTML = player.name + " " + player.surname + " " + "is here, sir.";

// function test(){
//    let a = 2;
//     console.log(a);
// }
// console.log(a)
// test();
// Global variable ve local variable testi yapıldı.

// let x = 3;
// let text = document.getElementById("demo").innerHTML
// switch(x){
//     case 0: alert("Süreğen durum devam ediyor.");
//     break;
//     case 1: alert("İlgiye değer gözlem başladı.");
//     break;
//     case 2: alert("Güvenlik birimleri tetikte.");
//     break;
//     case 3: alert("Aktif müdahale tehlikesi görünürde.");
//     break;
//     case 4: alert("Tam teşekküllü savaş durumu");
//     break;
//     case 5: alert("Nükleer tehdit durumu.");
//     break;

//     default: alert("Daima hazırlıklı olmalı.")
// }

// ber = 
// console.log(typeof(ber));
//Undefined testi için typeOf kullanma denemesi.

// let ber = null;
// if(typeof ber !== "undefined" && ber !== null){
//     console.log("Evet.");
// }else{
//     console.log("Hayır.")
// };
// console.log(typeof(ber));
// Değerin null olmadığını teyit etmek için kullandık.

// const ax = "Destiny";
// console.log(ax);
// void ax;
// console.log(ax);

// a = void 2;
// console.log(a); //Undefined geldi.

// console.log(void(2 == "2"))

// function newFunction(a, x) {
//     console.log(a * x);
// } newFunction(2, 5);    

// let person = {
//     name: "Ahmet",
//     lastName: "Geylani",
//     get fullName(){
//         return this.name + " " + this.lastName;
//     }
// };
// console.log(person.fullName);

// var numbs = [4, 1, 11, 25];
// let jam = numbs.forEach(myFunction);

// function myFunction(value){
//     return value * value;
// }console.log(myFunction());
// console.log(jam);

// let numbs = [1, 22,11, 12];
// let entity = numbs.map(myFunction);

// function myFunction(value){
//    return value * 2
// };
// console.log(entity);

// const person = {
//     firstName: "Furkan",
//     lastName: "Saydur",
//     height: "Unknown",
//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     },
//     set heig(value){
//         this.height = value
//     }
// };
// console.log(person.fullName);
// person.heig = 190;
// console.log(person.height);

// const test1 = (x,y) => {return x*y};
// console.log(test1(2,5));

// let txt = "";
// const numbers = [22, 1, 85, 2];

// for(let x of numbers){
//     txt += x + " ";
// }
// console.log(txt) 

// let txt = "";
// const people = ["Ahmet","Burak","Cemal"];

// for(let x in people){
//     txt += people[x] + " ";
// }
// console.log(txt)
// In olanlar veyahut Stringlerde dediğim sistem şeklinde gerçekleşme olabiliyor.

// const saydur = {name: "Saydur"};
// const deValois = {name: "de Valois"};
// const tudor = {name: "Tudor"};

// const houses = new Map();

// houses.set(saydur, 1200);
// houses.set(deValois, 950);
// houses.set(tudor, 900);

// console.log(houses);

// let countries = new Set();

// countries.add("Andlana");
// countries.add("France");
// countries.add("Austria");

// console.log(countries);

// class Person {
//     constructor(firstName, lastName, language, country){          //İçersine parametre(ler)ekleyeceğiz.
//         // firstName = this.firstName ;
//         // lastName = this.lastName;
//         // language = this.language;
//         // country = this.country;      //Bu yöntem işi yaramamaktadır.
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.language = language;
//         this.country = country;   
//     }
// }
// const individual = new Person("Furkan","Saydur","Turkish","Turkey");
// console.log(individual)

// !!!
// const myPromise = new Promise(function(myResolve,myReject){
//     setTimeout(() => {      //Burada parametre olmayacak.
//         myResolve("Tebrikler!");
//         myReject("Tekrar deneyiniz!");
//     }, 3000);
// });
// myPromise.then(function(value){     //Gereksiz gibi gözükse de bu kısım olmadan görüntüleme yapılamaz.
//     console.log(value);
// })

// const person = {
//     name: "Furkan",
//     surname: "Saydur",
//     language: "Turkish",
//     country: "Iceland"
// };
// let id = Symbol("id");
// person[id] = 3135153;
// console.log(person[id])

// function myFunction(x, y = 10){     //Burada 10'a eşit olan sadece Y.
//     return x*y
// };
// let testing1 = myFunction(3);
// console.log(testing1);
// let testing2 = myFunction(3,4);
// console.log(testing2);

// function sum(...args){
//     let sum = 0;
//     for(let arg of args){
//         sum += arg;
//     }
//     return sum;
// };
// let h = sum(5,3);
// console.log(h);

// console.log(Math.trunc(3,4));
// console.log(Math.trunc(4,3));
// console.log(Math.trunc(6,8));

// console.log(Math.sign(-4))
// console.log(Math.sign(4))
// console.log(Math.sign(0))

// console.log(Math.cbrt(218))
// console.log(Math.cbrt(144))
// console.log(Math.cbrt(173))  

// console.log(Math.log2(5));

// const people = ["Mustafa","Bayram","Orhun"];
// const p = people.entries();

// for(let x of p){
//     document.getElementById("demo").innerHTML += " "+  x;
// };

// let a = 5;
// a = a**=3;
// console.log(a);

// let smt = "12";                 //Sayı tırnak işareti ile beraber olmalıdır.
// let smth = smt.padStart(3, "4");   //Rakamların her biri de bir index sahibi olduğu akılda bulunurak yapılmalıdır.
// console.log(smth);

// const person = {
//     name: "furkan",
//     surname: "saydur",
//     height: 190,
//     weight: 87
// };
// console.log(Object.entries(person));

// const ranks = {
//     Vergil: 1200,
//     Valois: 1000,
//     Tudor:1000
// };
// for(let[rank, value] of Object.entries(ranks)){
//     document.getElementById("demo").innerHTML += rank + " " + value + " " ;
// };

// const person = {
//     name: "Furkan",
//     surname: "Saydur",
//     hairColor: "Dark brown",
//     eyeColour: "Dark brown"
// };
// document.getElementById("demo").innerHTML = Object.values(person);  //One dimensionel array.

// async function myJam(){
// let myPromise = new Promise(function(myResolve){
//    setTimeout(() => {
//        myResolve("Merhaba!")
//    }, 2000)});
//     document.getElementById("demo").innerHTML = await myPromise;    //Document işlevinin parantezler içerisindeki konumuna dikkat et.
// }
// myJam();    //Burada async ve await çıkarılır ise o zaman output [object Promise] olarak oluşacaktır.

// const myObj = {
//     name: "Furkan",
//     surname: "Saydur",
//     height: 190
// };

// let txt = " ";
// for await (let x of myObj){         //Await kullanıldığında for in olmuyor gibi gözüküyor.
//     txt += x
// }
// console.log(txt)     // Bunun araştırılması tavsiye edilir. Iteratorler ile beraber incelenebilir.

// let{x, y, ...z} = {x: 12, y:53, f:13, s:16, r:14};   //Buna destructing de denilebilir.
// console.log(z);

// const comp = {
//     founder: "Furkan",
//     date: 2022,
//     fields: [
//         {name: "Software", products:["A","B","C"]},
//         {name: "Defense Industry", products:["D","E","F"]},
//         {name: "Rocket Industry", products:["G","H","I"]}
//     ]
// };
// console.log(comp.fields);

// let txt = " ";
// for(let x in comp.fields){
//     txt += "<h1>" + comp.fields[x].name + "</h1>";
//     for(let y in comp.fields[x].products){
//     txt += comp.fields[x].products[y];
//     }
// };
// document.getElementById("demo").innerHTML = txt;    

// const person = {
//     name:"Furkan",
//     surname: "Saydur",
//     get fullName(){
//         return this.name+ " " + this.surname;
//     }
// };
// console.log(person.fullName);   //() kullanılmasına gerek yoktur.

// const person = {
//     name: "Furkan",
//     surname: "Saydur",
//     height: 191,
//     set heig(heig){
//         this.height = heig;
//     }
// };   
// console.log(person.height)
// person.height = 195;
// person.heig = 193;
// console.log(person.height);

// const myObj = { status: 0 };

// Object.defineProperty(myObj, "reset", {
//     get: function () {
//         this.status = 0
//     }
// })
// Object.defineProperty(myObj, "increment", {
//     get: function () {
//         this.status += 1
//     }
// })
// Object.defineProperty(myObj, "decrement", {
//     get: function () {
//         this.status -= 1
//     }
// })
// Object.defineProperty(myObj, "add", {
//     set: function (value) {
//         this.status += value;
//     }
// })
// Object.defineProperty(myObj,"substract",{
//     set: function(value){
//         this.status -= value;
//     }
// })
// console.log(myObj.status);
// myObj.increment;
// console.log(myObj.status);
// myObj.add = 5;
// console.log(myObj.status);
// myObj.substract = 2;
// console.log(myObj.status);

// function Person(firstName,lastName,nationality,height,weight,position){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.nationality = nationality;
//     this.height = height;
//     this.weight = weight;
//     this.position = position;
//     this.fullName = function(){
//         return this.firstName + " " +this.lastName;
//     }
//     this.nameChange = function(value){
//         this.firstName = value;
//     }
// };
// const individual = new Person("Beren","Vergil","Turkish",211,120,"Power Forward");
// console.log(individual.fullName()); //Burada diğerlerinden farklı olarak () ifadesi kullanıyoruz.
// individual.nameChange("Sedef"); 
// console.log(individual.firstName);

// function Person(name,lastName,age,country){
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;    
// };
// const someone = new Person("Ahmet","Arslan",23,"Turkey");
// console.log(someone);
// Person.prototype.height = 202;
// someone.height = 192;
// console.log(someone);
// console.log(someone.height);
// Person.prototype.fullName = function(){
//     return this.name + " " + this.lastName;
// }
// console.log(someone.fullName());

// const txt = "aboveGrand";
// for(let x of txt){
// console.log(x);
// }

// const tiers = ["AA","A","B","C","D"];
// for(let x of tiers){
//     console.log(x);
// }

// function myMachina(){
//     let x = 0;
//     return{
//         next: function(){
//             x += 10;
//             return  {value:x, done:false}
//         }
//     };
// }
// const b = myMachina();
// let x = b.next();
// console.log(x.value);

// const myJam = {};

// myJam[Symbol.iterator] = function(){
//     let x = 0;
//     done = false;   //Burada done olmasa idi o zaman if içeerisindeki done hata verecekti.
//     return {
//         next(){
//             x+=10;
//             if(x == 100) {done = true}
//             return{value:x, done:done};
//         }
//     };
// }
// myJam.next;

// let txt = "";

//  for(let y of myJam){
//      txt += y + " ";
// };
//  console.log(txt);

// let iterator = myJam[Symbol.iterator]();

// let met = "";

// while(true){
//     const result = iterator.next();
//     if(result.done) break;
//     met += result.value + " ";
// };
// document.getElementById("demo").innerHTML = met;

// let mySet = new Set();

// mySet.add("F");
// mySet.add("U");
// mySet.add("R");
// mySet.add("K");
// mySet.add("A");
// mySet.add("N");

// let txt = "";

// // for(let x of mySet){
// //     txt += x;
// // }
// // console.log(txt);

// const test = mySet.values();

// for(let x of test){
//     txt += x;
// }
// console.log(txt)

// const myFunction = function(a,b) {return a*b};
// let y = myFunction(5,7);
// console.log(y);

// (function(){
//     let a = "Nevermind.";
//     console.log(a);
// }());

// function myFunction(a,b){return a*b;}
// let x = myFunction(4,6) * 2;
// console.log(x);

// function myFunction(a,b){return arguments.length;}
// let a = myFunction(2,5);
// console.log(a);

// function myFunction(a,b){return a+b;}
// let txt = myFunction.toString();
// console.log(txt);

// const b = (a,x) => a-x;
// console.log(b(4,2));

// const a = (x,y) => x*y;
// b = a(2,5);
// console.log(b);

// function myFunction(x,y){
//     if(y == undefined){
//         y = 3;
//     }
//     return x*y;
// }
// a = myFunction(2);
// console.log(a);

// function myFunction(x,y = 5){
//     return x*y;
// }
// a = myFunction(8);
// console.log(a);

// const myArray = [1, 22, 166, 12, 122];

// function findMax() {
//     let x = -Infinity;
//     for (i = 0; i < arguments.length; i++) {
//         if (arguments[i] > x) {
//             x = arguments[i];
//         }
//     }
//     return x;
// }
// document.getElementById("demo").innerHTML = findMax(5, 11, 666, 1244);
// console.log(findMax(155,12233,661));

// function calcSum(){
//     let sum = 0;
//     for(i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     return sum;
// }
// console.log(calcSum(22,94,26))

// const person = {
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person1 = {
//     firstName: "Furkan",
//     lastName: "Saydur"
// }
// const person2 = {
//     firstName:"Ahmet",
//     lastName:"Selemet"
// }
// a = person.fullName.call(person1);
// document.getElementById("demo").innerHTML = a;

// const person = {
//     fullName: function(height, weight){
//         return this.firstName + " " + this.lastName + " " + height + " " + weight;
//     }
// }
// const person1 = {
//     firstName: "Furkan",
//     lastName:"Saydur"
// }
// let inner = document.getElementById("demo");         ////////
// a = person.fullName.call(person1, 190, 88);  
// inner.innerHTML = a;
// a = person.fullName.apply(person1,[190,88]); //Burada yukarıdaki gibi kabul etmemesinin sebebi argümanları array gibi almasıdır.
// inner.innerHTML = a;

// inner.innerHTML = Math.max.apply("", [22, 53, 12]);;  

// const person = {
//     firstName:"Furkan",
//     lastName:"Saydur",
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person2 = {
//     firstName: "Uygar",
//     lastName: "Aslan"
// }
// a = person.fullName.bind(person2);
// inner.innerHTML = a();      //Fonksiyon olduğu için call yaptık.

// const person = {
//     firstName:"Furkan",
//     lastName:"Saydur",
//     fullName: function(){
//         let inner = document.getElementById("demo");
//         inner.innerHTML = this.firstName + " " + this.lastName;
//     }
// }
// const person2 = {
//     firstName: "Uygar",
//     lastName: "Aslan"
// }
// a = person.fullName.bind(person2);
// console.log(a)

// person.fullName();

// setTimeout(person.fullName, 3000);  //Undefined göreriz.

// let x = person.fullName.bind(person);
// setTimeout(x, 3000);

// let num = 0;

// function increase(){
//     num +=1
// };
// increase();
// increase();
// increase();
// console.log(num);

// let num = 0;

// function increase(){
//     let num = 0
//     num +=1
// };
// increase();
// increase();
// increase();
// console.log(num);   //It displayed 0.

// function increase(){
//     let num = 0;
//     num += 1;
//     return num;
// }
// document.getElementById("demo").innerHTML = increase(); //Çalışmadı çünkü her seferinde resetlendi.

// function increase(){
//     let num = 0;
//     function plus() {num += 1;}
//     plus();
//     return num;
// }

// const increase = (function(){
//     let x = 0;
//     return function() {x += 1; return x}
// })();
// increase();
// increase();
// document.getElementById("demo").innerHTML = increase();

// let increase = (function(){
//     let num = 0;
//     return function() {num +=1; return num}
// })();

// function myFunction(){
//  document.getElementById("demo").innerHTML = increase(); //İşe yaramadı.
// }

// class Person{
//     constructor(name,lastName,height,weight, age ){
//         this.name= name;
//         this.lastName = lastName;
//         this.height = height;
//         this.weight = weight;
//         this.age = age;
//     }
//     date(){
//         let date = new Date();
//         return date.getFullYear() - this.age;
//     }
// } 
// const human = new Person("Furkan","Saydur", 190, 88, 18);
// console.log(human);
// document.getElementById("demo").innerHTML = "This person is born in" + " " + human.date();

// class Car {
//     constructor(brand){
//         this.carName = brand;
//     }
//     current(){
//         return "My car is a" + " " + this.carName;
//     }
// }
// class Model extends Car{
//     constructor(brand, mod){
//         super(brand);
//         this.model = mod;
//     }
//     show(){
//         return this.current() + " " + "and it is the model of" + " " + this.model;
//     }
// }
// const myCar = new Model("Bugatti", "Centodieci");
// console.log(myCar.show())

// class Car{
//     constructor(brand){
//         this._carname = brand;
//     }
//     get carname(){
//         return this._carname;
//     }
//     set carname(x){
//         this._carname = x
//     }
// }
// let myCar = new Car("Ferrari");
// console.log(myCar);
// console.log(myCar.carname);
// myCar.carname = "Bugatti";
// console.log(myCar.carname);

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     static intro(firstname) {
//         return "Hi! I am very pleased to meet you. I am" + " " + firstname + ".";
//     }
// }
// const individual = new Person("Orhan", "Kilimci");
// console.log(individual);
// console.log(Person.intro("Ahmet"));

// class Person {
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     static name(x){
//         return "My name is" + " " + x.firstname +".";
//     }
// }
// let someone = new Person("Uygar","Kalemci");
// console.log(Person.name(someone));

// function gösterici(x){
//     document.getElementById("demo").innerHTML = x;
// }
// function ilk(){
//     gösterici("Birinci benim!");
// }
// function sonraki(){
//     gösterici("İkinci benim.");
// }
// ilk();
// sonraki();

// function gösterici(x){
//     document.getElementById("demo").innerHTML = x;
// }
// function toplama(a,b){
//    gösterici(a+b); 
// }
// function çıkarma(a,b){
//     gösterici(a-b);
// };
// function çarpma(a,b){
//     gösterici(a*b);
// }
// function bölme(a,b){
//     gösterici(a/b);
// }
// çarpma(6,5);     //Bu şahsi bir deneme örneğidir. Rehber sıfatı taşımaz.

// function gösterici(x){
//     document.getElementById("demo").innerHTML = x
// }
// function çarpma(a,b, myCallback){
//     let sum = a*b;
//     myCallback(sum); 
// }
// çarpma(7,2, gösterici); //İşlem bittiğinde, bitebilirse, o zaman gösterici'yi çalıştır diyor. Buradaki myCallback göstericinin kendisine eşit oluyor.

// setTimeout(function(){myFunction("Merhaba! Benim adım Uruz.");},3000)      //Fonksiyon içerisinde bir fonksiyon adı yaratmak gereklidir.

// function myFunction(x){
//     document.getElementById("demo").innerHTML = x;
// }

// setInterval(myFunction, 500);

// function myFunction(){
//     let date = new Date();
//     let sec = date.getSeconds();
//     let minut = date.getMinutes();
//     document.getElementById("demo").innerHTML = "It is" + " " + minut + " " + "and" + " " + sec;
// }

// function displayer(x){
//     document.getElementById("demo").innerHTML = x;
// }

// function getFile(callback){
//     let requ = new XMLHttpRequest();
//     requ.open("GET", "info.html");
//     requ.onload = function(){
//         if(requ.status == 200){
//             callback(this.responseText);
//         }
//         else{
//             callback(requ.status);
//         }
//     }
//     requ.send();
// }
// getFile(displayer);

// const name = "Furkan";
// const greeting = `Hi! My name is ${name}`;
// console.log(greeting);

// function displayer(x){
//     document.getElementById("demo").innerHTML = x;
// }

// let myPromise = new Promise(function(myResolve, myReject){

//     let a = 20;
//     let b = 4.5;

//     if(a*b >= 90){
//         myResolve("Başarılı.")
//     }else{
//         myReject("Başarısız.")
//     }
// })
// myPromise.then(
//     function(value){displayer(value)},
//     function(error){displayer(error)}
// );

// setTimeout(function(){myFunc("İnsanlığa ve barışa doğru...");},2000);

// function myFunc(x){
//     document.getElementById("demo").innerHTML = x;
// }

// let prom = new Promise(function(resolve, reject){
//     setTimeout(function(){resolve("Merhaba dostlar!");},3000)
// })
// prom.then(function(x){
//     document.getElementById("demo").innerHTML = x
// })

//TIMEOUT CALLBACK AND PROMISE VERSIONS

// let prom = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("Başarılı")
//     });
// },3000)
// prom.then(
//     function(value){document.getElementById("demo").innerHTML = value},
//     function(error){document.getElementById("demo").innerHTML = error}
// )

// setTimeout(function(){myFunction("Durmak yok.");},4000);
// function myFunction(x){
//     document.getElementById("demo").innerHTML = x;
// }

// function displayer(x){
//     document.getElementById("demo").innerHTML = x;
// }

// let prom = new Promise(function(resolve, reject){
//     let a = 3;
//     let b = 5;

//     if(a*b >=20){
//         resolve("Yeterli.")
//     }else{
//         reject("Yetersiz.")
//     }
// })
// // prom.then(
// //     function(value){document.getElementById("demo").innerHTML = value},
// //     function(err){document.getElementById("demo").innerHTML = err}    
// // )
// prom.then(
//     function(value){displayer(value)},  //Denemem.
//     function(err){displayer(err)}    
// )

// setTimeout(function(){myFunction("Bu bir denemedir.");},3000);

// function myFunction(value){
//     document.getElementById("demo").innerHTML = value
// }   

function displayer(x) {
    document.getElementById("demo").innerHTML = x
}

// let prom = new Promise(function(resolve){
//     setTimeout(function(){resolve("Merhaba! Nasılsınız?");},3000)
// })
// prom.then(
//     function(value){displayer(value)},
//     function(err){displayer(err)}
// )

// function dosyaAl(callback){
//     let req = new XMLHttpRequest(); 
//     req.open("GET","info.html");
//     req.onload = function(){
//         if(req.status == 200){
//             callback(this.responseText)
//         }else{
//             callback(req.status)
//         }
//     }
//     req.send();
// }
// dosyaAl(displayer)

// let prom = new Promise(function(resolve,reject){
//     let requ = new XMLHttpRequest();
//     requ.open("GET","info.html");
//     requ.onload = function(){
//         if(requ.status == 200){
//             resolve(this.responseText)
//         }else{
//             reject(requ.status)
//         }
//     } 
//     requ.send();
// })
// prom.then(
//     function(value){displayer(value)},
//     function(err){displayer(err)}
// )

// async function myFunction(){
//     return "Hello, my friend!";
// }
// function myFunction(){                               //Diğer bir versiyon.
//    return Promise.resolve("Hello, my friend!");     //Return demez ise veri gitmiyor.
// }
// myFunction().then(
//     function(value){console.log(value)},
//     function(err){console.log(err)}
// )

// function displayer(x){
//     document.getElementById("demo").innerHTML = x;
// }

// async function myFunction(){
//     return "Sup, brother?"
// }
// myFunction().then(
//     function(value){ displayer(value)}
// )

// async function myFunction(){
//     let prom = new Promise(function(resolve, reject){
//         resolve("Esenlikler!")
//     });
//     document.getElementById("demo").innerHTML = await prom;
// }
// myFunction();

// async function myFunction(){
//     let promise = new Promise(function(resolve){
//         setTimeout(function(){resolve("Merhaba!");},3000);
//     })
//     document.getElementById("demo").innerHTML = await promise;
// }
// myFunction();

// async function myFunction(){
//     let promise = new Promise(function(resolve){
//         let req = new XMLHttpRequest();
//         req.open("GET","info.html");
//         req.onload = function(){
//             if(req.status == 200){
//                 resolve(this.response);
//             }else{
//                 resolve("File not found.")
//             }
//         }
//         req.send();
//     })
//     document.getElementById("demo").innerHTML = await promise;
// }
// myFunction();

// let identity = document.forms["opening"];
// let text = "";
// for(let i =0; i<identity.lenght; i++ ){
//     text +=identity.elements[i].value + "<br>"
// }
// console.log(text);

// function myFunction(){
//     let a = document.forms["myForm"]["fname"].value;
//     if(a == ""){
//         alert("Lütfen bir ad giriniz.");
//         return false;
//     }
// }

// function myFunction() {
//     let x = document.getElementById("girişAlanı").value;
//     let y = document.getElementById("sonuçAlanı");
//     if (isNaN(x) || x < 1 || x > 9){
//         y.innerHTML = "Lütfen uygun bir sayı giriniz."
//     }else{
//         y.innerHTML = "Uygun veri girildi.";
//     }    
// }

// function myFunction(){
//     let x = document.forms["myForm"]["fname"].value;
//     let y = document.getElementById("bilginlendirme");
//     if(x = "" || x != String(x)){
//         y.innerHTML = "Lütfen uygun bir veri girin."

//     }else{
//         y.innerHTML = "Uygun."
//     }
//     myFunction.preventDefault();
// }    
// Bunu deneme amaçlı yazdım. preventDefault ve return false üzerine araştırmalar yapmak tavsiye edilmektedir.

// document.getElementById("demo").style.color = "green";

// function changeColor(){
//     document.getElementById("buttonbe").style.color = "red";
// }

// function makeVisible(){
//     document.getElementById("demo").style.visibility = "visible";
// }
// function makeSecret(){
//     document.getElementById("demo").style.visibility = "hidden";
// }


// function myMotion(){
//     let id = null;
//     let ele = document.getElementById("animation");
//     let posi = 0;
//     clearInterval(id);
//     id = setInterval(location, 1);
//     function location(){
//         if(posi == 150){
//             clearInterval(id)
//         }else{
//             posi++;
//             ele.style.top = posi + "px";
//             ele.style.left = posi + "px";
//         }
//     }
// }

// function myMotion   (){
//     let id = null;
//     let elem = document.getElementById("animation");
//     let posit = 0;
//     clearInterval(id);
//     id = setInterval(location, 55);
//     function location(){
//         if(posit == 150){
//             clearInterval(id)
//         }else{
//             posit++;
//             elem.style.top = posit + "px";
//             elem.style.left = posit + "px";
//         }
//     }
// }    

// function changeText(x){
//     x.innerHTML = "Haddini bil delikanlı";
// }
//Galiba html içerisinde this dersek fonksiyonda herhangi bir parametre adı olmalı.

// function myFunction(x){
//     document.getElementById("demo").innerHTML = Date();
// }

// function checkCookies(){
//     let txt = "";
//     if(navigator.cookieEnabled == true){
//         txt = "Cookies are enabled."
//     }else{
//         txt = "Cookies are disabled."
//     }
//     document.getElementById("demo").innerHTML = txt;
// }

// function upperCase(){
//     let x = document.getElementById("inputField");
//     x.value = x.value.toUpperCase();
// }

// function mOver(obj){
//     obj.innerHTML = "Aferin!";
//     document.getElementById("container").style.backgroundColor = "yellow";
//     document.getElementById("container").style.color = "black";
// }
// function mOut(obj){
//     obj.innerHTML = "Buraya gel";
//     document.getElementById("container").style.backgroundColor = "green";
//     document.getElementById("container").style.color = "yellow";
// }

// function mDown(x){
//     x.innerHTML = "Şimdi bırak.";
//     x.style.backgroundColor = "magenta";
// }
// function mUp(x){
//     x.innerHTML = "Bu kadar."
// }

// document.getElementById("myBtn").addEventListener("click", function(){document.getElementById("demo").innerHTML = Date()})

// document.getElementById("myBtn").addEventListener("click", dDate);  //İçeride () olursa tıklamanın manası kalmıyor.

// function dDate() {
//     document.getElementById("demo").innerHTML = Date();
// }

// window.addEventListener("resize", function(){
//     document.getElementById("demo").innerHTML = Math.random();
// })

document.getElementById("myInput").addEventListener("click",function(x,y){

})