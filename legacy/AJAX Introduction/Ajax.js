function seeText(){
    let request = new XMLHttpRequest();
    request.open("GET", "info.txt");
    request.onload = function(){
        if(request.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        }else{
            document.getElementById("demo").innerHTML = request.status;
        }
    }
    request.send();
}