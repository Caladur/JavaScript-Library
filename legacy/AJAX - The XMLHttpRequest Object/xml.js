// function myFunction(){
//     let req = new XMLHttpRequest();
//     req.open("GET", "info.txt");
//     req.onload = function (){
//         if(req.status == 200){
//             // document.getElementById("test").innerHTML = this.responseText;
//             // document.getElementById("test").innerHTML = this.getAllResponseHeaders();
//             document.getElementById("test").innerHTML = this.getResponseHeader(di);
//             // this.abort()
//         }else{
//             this.abort()
//         }
//     }
//     req.send();
// }

// loadDoc("info.txt", myFunction1)

// let element = document.getElementById("test");


// function loadDoc(url, callback){
//     const req = new XMLHttpRequest()
//     req.onload = function(){
//         callback(this);
//     }
//     req.open("GET", url)
//     req.send()
// }

// function myFunction1(x){
//     if(x.status == 200){
//         element.innerHTML = x.responseText;
//     }else{
//         element.innerHTML = x.status
//     }
// }

function myFunction(){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            document.getElementById("test").innerHTML = this.responseText
        }else{
            document.getElementById("test").innerHTML = this.statusText;
        }
    }
    req.open("GET", "info.txt");
    req.send();    
}
myFunction();