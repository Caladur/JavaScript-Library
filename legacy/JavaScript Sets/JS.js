// const letters = new Set(["A","B","C","D"])

// const mySet = new Set();
// mySet.add("a");
// mySet.add("b");
// mySet.add("c");

const a = "a";
const b = "b";
const c = "c";
const mySet2 = new Set();
mySet2.add(a);
mySet2.add(b);
mySet2.add(c);
// let text = "";
// mySet2.forEach(function(value){
//     text += value + "<br>";
// })
// document.getElementById("demo").innerHTML = text;

// document.getElementById("demo").innerHTML = mySet2.values();

// const iterator = mySet2.values();
// let txt = "";
// for(let x of iterator){
//     txt += x.toUpperCase() + " ";
// }
// document.getElementById("demo").innerHTML = txt;

const ittera = mySet2.entries();

let text = "";
for (const x of ittera) {
    text += x + " ";
}
document.getElementById("demo").innerHTML = text;