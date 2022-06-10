// let a = document.cookie = "username = Furkan Saydur";
// let b = document.cookie2 = "country = Turkey; expires= Sun, 19 June 2022 23:00:00 UTC";
// let c = document.cookie3 = "continent = Asia; expires = Sun, 19 June 20222 23:00:00 UTC; path=/";

// let a = document.cookie = "username = Furkan Saydur; country = Turkey; continent = Asia";
// console.log(a);
// let b = document.cookie = "username = Ali Veli; expires = Wed, 8 June 2022 19:00:00 UTC; path=/";
// console.log(b);

function myFunction(name, value, expiration){
    let date = new Date();
    date.setTime(date.getTime() + (expiration*24*60*60*1000))
    let expires = "Expires =" + date.toUTCString();
    document.cookie = name = "=" + value + ";" + expires + ";path=/";
}

function getCookie(name){
    let forename = name + "=";
    let decoder = decodeURIComponent(document.cookie);
    let ca = decoder.split(";");
    for(let i = 0; i<ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == ""){
            c = c.substring(1);
        }
        if(c.indexOf(forename) == 0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(){
    let username = getCookie("username");
    if(username !== ""){
        alert("Merhaba"+ username);
    }else{
        prompt("Lütfen adınızı giriniz")
    }
    if(username !== "" && username !== null){
        setCookie("username",username, 365)
    }
}