let s;
function start(){
    if(typeof(x) == "undefined"){
        s = new Worker("workers.js")
    }
    s.onmessage = function(x){
        document.getElementById("result").innerHTML = x.data;
    }
}

function stop(){
    s.terminate();
    s = undefined;
}

// function check(){
//     if(typeof(Worker) == "undefined"){
//         console.log("Başarılı");
//     }else{
//         console.log("Başarısız");
//     }
// }
// check();

// function myFunction(){
//     if(typeof(w)== "undefined"){
//         w = new Worker("testworker.js");
//     }
// }