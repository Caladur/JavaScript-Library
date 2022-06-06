function Person(name,surname,height,weight,position){
this.name = "Beren";
this.surname = "Vergil";
this.height = 210;
this.weight = 120;
this.position = "Power Forward";
this.changePosition = function(newPosition){
    this.position = newPosition;
};
}
let otherP1 = new Person("Alperen","Şengün", 208, 110, "Center");
let otherP2 = new Person("Furkan","Korkmaz",201, 92,"Small Forward");

document.getElementById("demo1").innerHTML = otherP1.height;

otherP1.changePosition("Power Forward");
console.log(otherP1.position);
