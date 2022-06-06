//  const myCharacters = new Map([
//     ["Calla", 38645],
//     ["Phoisget", 38875],
//     ["Sedar", 135]    
// ]);
// myCharacters.set("Maled", 140);
// myCharacters.set("Mehrun", 2500);
// myCharacters.set("Ufan", 70);

// myCharacters.set("Calla", 38750);

// document.getElementById("demo").innerHTML = myCharacters.get("Calla");

// document.getElementById("demo2").innerHTML = myCharacters.size;

// myCharacters.delete("Ufan");

// document.getElementById("demo3").innerHTML = myCharacters.has("Ufan");

// console.log(typeof myCharacters);

// console.log(myCharacters instanceof Map);

// let text = "";
// myCharacters.forEach(function(value,key){
//     text += key + " " + value + " ";
// })
// console.log(text);

// let characters = "";
// for (const x of myCharacters.keys()){
//     characters += x + " ";
// }
// console.log(characters);

// let totalStrenght = "0";
// for(const x of myCharacters.values()){
//     totalStrenght += x; 
// }
// console.log(totalStrenght);
// document.getElementById("demo4").innerHTML = totalStrenght;

// let txt = "";
// for (const x of myCharacters.entries()){
//     txt += x + " ";
// }
// console.log(txt);

const calla = {name:"Calla"};
const phoisget = {name:"Phoisget"};

const myMap = new Map();

myMap.set(calla, 3800);
myMap.set(phoisget, 3850);

console.log(myMap.get("calla"));
console.log(myMap.get(calla));