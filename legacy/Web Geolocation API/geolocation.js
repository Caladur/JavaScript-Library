// let x = document.getElementById("test");
// function getLocation() {
//     if (navigator.geolocation) {
//         x.innerHTML = navigator.geolocation.getCurrentPosition(showCords)
//     } else {
//         x.innerHTML = "Location is not supported in your browser"
//     }
// }

// function showCords(position) {
//     x.innerHTML = "Latitude:" + position.coords.latitude +
//         "<br>Longitute:" + position.coords.longitude;
// }

// function showError(error) {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             x.innerHTML = "The user did not give permission to location"
//             break;
//         case error.POSITION_UNAVAILABLE:
//             x.innerHTML = "Location is not within the knowledge"
//             break;
//         case error.TIMEOUT:
//             x.innerHTML = "The process took accessional time"
//             break;
//         case error.UNKNOWN_ERROR:
//             x.innerHTML = "An unknown error occurred"
//             break;
//     }
// }

// function showCords(position) {
//     let fullCord = position.coords.latitude + " " + position.coords.longitude;
//     let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";


//     document.getElementById("map").innerHTML = "<img_src='"+img_url+"'>";
// }
let x = document.getElementById("test-2");
function currentPos(){
    
    if(navigator.geolocation){
        x.innerHTML = navigator.geolocation.watchPosition(updatePos)
    }else{
        x.innerHTML = "It is unavailable."
    }
}

function updatePos(data){
    x.innerHTML = "Latitude is " + data.coords.latitude + 
    "<br>Longitude is " + data.coords.longitude
}

