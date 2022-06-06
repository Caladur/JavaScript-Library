// let myString = "Calla";
// let txt = "";
// for (let x of myString) {
//     txt += x + "<br>"
// };
// document.getElementById("demo").innerHTML = txt;

// let myArray = ["Uhl", "Arb", "Edda", "Dugolur"];

// let pad = "";
// for (let x of myArray) {
//     pad += x + "<br>"
// }
// document.getElementById("demo2").innerHTML = pad;

// function myTerator() {
//     let n = 0;
//     return {
//         next: function () {
//             n += 10;
//             return {
//                 value: n, done: false
//             };
//         }
//     };
// }
// const n = myTerator();
// n.next();
// document.getElementById("demo3").innerHTML = n.next().value; //Bunun böyle yazılması lazım yoksa undefined veya object Object hatası alınır.

myObj = {};

myObj[Symbol.iterator] = function () {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true };
            return { value: n, done: done };
        }
    };
}
let text = ""
for (const obj of myObj) {
    text += obj + "<br>"
}
document.getElementById("demo").innerHTML = text;

let txt = "";

let iterator = myObj[Symbol.iterator]();

while(true){
    const result = iterator.next();
    if (result.done) break;
    txt += result.value + "<br>";
}
document.getElementById("demo2").innerHTML = txt;