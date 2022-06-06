let x = document.querySelectorAll("p.indicator");
document.getElementById("demo").innerHTML = x[0].innerHTML;

let y = document.forms("foremost");
let text = "";
for(let i = 0; i<y.length;i++){
    text += y.elements[i].value + '<br>';
}
document.getElementById("demo").innerHTML = text;