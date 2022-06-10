let test = document.getElementById("test");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        test.innerHTML = "This browser does not support this feature."
    }
}
function showPosition(position){
    test.innerHTML = "Latitude:" + position.coords.latitude +
    "<br> Longitude:" + position.coords.longitude;
}