// function myFunction(){
//     let element = document.getElementById("test");
//     if(!element.checkValidity()){   //Eğer checkValidity true olmaz ise demek isteniliyor.
//         document.getElementById("area").innerHTML = element.validationMessage;
//     }else{
//         document.getElementById("area").innerHTML = "Uygun veri girildi."
//     }
// }

// function validate(x){                        //Bunu denemek için geri döneceğim.
//     let input = document.getElementById("x");
//     let validityState = input.validity;
// }

function myFunction(){
    let a = document.getElementById("input-area");
    if(a.validity.rangeOverflow || a.validity.rangeUnderflow){
        document.getElementById("area").innerHTML = "Aralıkları ihlal eden bir sayı girdiniz."
    }else{
        document.getElementById("area").innerHTML = "Girdi yeterlidir."
    }
}