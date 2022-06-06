// async function myOne(){
//    return "Great!";
// }
// myOne().then(
//     function(value){
//         console.log(value)
//     },
//     function(err){
//         console.log(err)
//     }
// )

// function myPromise(){
//     return Promise.resolve("Alooo")
// }
// console.log(myPromise())

// async function myFunction(){
//     let thePromise = new Promise(function(resolve,reject){
//         resolve("You must continue!");
//     })
//     document.getElementById("demo").innerHTML = await thePromise;
// }
// myFunction();

//An example withour reject!

// async function myFunction(){
//     let myPromise = new Promise(function(resolve){
//         resolve("Must destroy this schedule!")
//     })
//     document.getElementById("demo").innerHTML = await myPromise
// }
// myFunction();

// async function myFunction(){
//     let myPromise = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("Must continue!");
//         },3000);
//     })
//     document.getElementById("demo").innerHTML = await myPromise;
// }
// myFunction();

async function getFile(){
    let myPromise = new Promise(function(resolve,reject){
        let req = new XMLHttpRequest();
        req.open("GET","Nilüfer.txt");
        req.onload = function(){
            if(req.status == 200){
                resolve(req.response)
            }else(
                reject("Error is" + " " +req.status)
            )
        }
        req.send()
    })
    document.getElementById("demo").innerHTML = await myPromise;
}
getFile()