// let myPromise = new Promise(function(resolve,reject){
//     resolve();
//     reject();
// });
// myPromise.then(
//     function(value){console.log("It was a successful operation")},
//     function(error){error.log("There was an error in the sequence!")}
// );

// function myDisplayer(x){
//     document.getElementById("demo").innerHTML = x;
// }
// let myPromise = new Promise(function(resolve,reject){
//     let x = 15;
//     if(x == 15){
//         resolve("It's good");
//     }else{
//         reject("It is bad")
//     }
// });
// myPromise.then(
//     function(value){myDisplayer(value)},
//     function(error){myDisplayer(error)}
// );

// setTimeout(function(){myFunction("I love you as always")}, 2000);

// function myFunction(value){
//     document.getElementById("demo").innerHTML = value;
// }

// let myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){resolve("I know my destiny.");},2500);
// });
// myPromise.then(
//     function(value){
//         document.getElementById("demo").innerHTML= value;
// });

function myDisplayer(x){
    document.getElementById("demo").innerHTML = x;
}

let myPromise = new Promise(function(resolve,reject){
    let req = new XMLHttpRequest();
    req.open("GET","Nilüfer.txt");
    req.onload = function(){
        if(req.status == 200){
            resolve(req.response);
        }else{
            reject("There seems to be a problem :(")
        }
    }
    req.send();
});
myPromise.then(
    function(value){
        myDisplayer(value);
    },
    function(error){
        myDisplayer(error);
    }
)