let i = 0;

function myJam(){
    i++;
    postMessage(i); //Veriyi HTML dosyasına gönderecek.
    setTimeout("myJam()", 1000);
}
myJam();