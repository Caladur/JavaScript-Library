const names = ["ferhat","fuat","furkan","fazıl"];

let myPromise = new Promise((resolve,reject) =>{
setTimeout(()=>{
    resolve("Made it!");
},2500);
});

myPromise
.then(value =>{return value + "and it feels good";})
.then(value =>{return value + "and it fells fantastic";})
.then(value =>{return value + "yet again it is good";})
.then(value =>{console.log(value)})
.catch(err =>{console.log(err)});