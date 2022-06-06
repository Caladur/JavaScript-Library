// function displayer(x){
//     document.getElementById("demo").innerHTML = x;
// }
// function calculator(number1,number2,callback){
//     let sum = number1 + number2;
//     callback(sum)
// }
// calculator(7,7,displayer);

// setTimeout(myFunction, 4000);

// function myFunction(){
//     document.getElementById("demo").innerHTML = "We love you!"; 
// }   

// setTimeout(function(){myFunc("I would love to fuck you!");}, 2500);
// function myFunc(value){
// document.getElementById("demo").innerHTML = value
// }

// setInterval(myFunction, 1000);

// function myFunction(){
//     let d = new Date();
//     document.getElementById("demo").innerHTML =
//     d.getHours() + "." + 
//     d.getMinutes() + "." + 
//     d.getSeconds(); 
// }

function myDisplayer(x) {
    document.getElementById("demo").innerHTML = x;
}

function myFunction(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "beren.html");
    req.onload = function () {
        if (req.status == 200) {
            myCallback(this.responseText);
        } else {
            myCallback("The problem is" + " " + req.status);
        }
        
    }
    req.send();
}
myFunction(myDisplayer);    