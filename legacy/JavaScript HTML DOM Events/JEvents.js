function changeText(id) {
    id.innerHTML = "Changed nigga!";
}
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myBtn").onclick = displayDate;

function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("demo2").innerHTML = text;
}

function upperCase(id){
    const x = document.getElementById("name");
    x.value = x.value.toUpperCase();
}

function mOver(obj){
    obj.innerHTML = "Entered!"
}
function mOut(obj){
    obj.innerHTML = "Left!"
}

function mDown(x){
    x.innerHTML = "Güzel";
}
function mUp(x){
    x.innerHTML = "Bravo";
}
