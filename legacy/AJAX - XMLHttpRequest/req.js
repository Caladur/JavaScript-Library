// function myFunction(){
//     let req = new XMLHttpRequest()
//     req.open("GET", "info.txt?country=turkey&city=Kastamonu")
//     req.onload = function(){
//         document.getElementById("test").innerHTML = this.responseText;
//     }
//     req.send();
// }
// myFunction();

// function myFunction(){
//     let req = new XMLHttpRequest()
//     req.onload = function(){
//         document.getElementById("test").innerHTML = this.responseText
//     }
//     req.open("POST", "info.txt")
//     req.setRequestHeader("Content-type", "application/txt")
//     req.send("country=turkey&city=kastamonu")
// }

function myFunction(){
    let req = new XMLHttpRequest()
    req.open("GET", "info.txt", false)
    req.onload = function(){
        document.getElementById("test").innerHTML = this.responseText;
    }
    req.send()
}