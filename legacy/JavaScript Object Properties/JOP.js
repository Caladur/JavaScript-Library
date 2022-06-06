// const numbers = [11, 222, 65];
// for(let number of numbers){
//     number +=1;
//    console.log(number)
// }

// const person = {
//     name:"Furkan",
//     surname:"Saydur",
//     age:19
// };

// for(let x in person){
//     console.log(person[x])      //Böyle yazmaz isek o zaman sadece value-name çiftlerinden name ler yazılır.
// };

// //Nested Object
// myObject =  {
//     name:"Furkan",
//     surname:"Saydur",
//     age:19,
//     job:{
//         company:"Apple",
//         title:"Developer Team Manager",
//         salary: 325000
//     }
// }
// // console.log(myObject.job.company)
// console.log(myObject.job["title"]); //Burada tırnak işareti kullanmak zorundasınız.
// console.log(myObject["job"]["salary"]);
// let o1 = "job";     //Tırnak işaretleri önemli.
// let o2 = "company";  //Tırnak işaretleri önemli.
// console.log(myObject[o1][o2]);

const myObj = {
    name:"Robert",
    surname:"Hunt",
    Age:26,
    cars: [
        {name:"Fiat", models:["A23","AX211","Roverdam"]},
        {name:"Opel", models:["Astra","Seadorf","Alanamo"]},
        {name:"Saydur", models: ["Lakai","Nemer","Tuali"]}
    ]
}
// for(let j in myObject.cars){
//     x+= `<h1>` + myObject.cars[j].name + `</h1>`;
//     for(let y in myObject.cars[j].models){
//         x+= myObject.cars[j].models[y];
//     }
// }
