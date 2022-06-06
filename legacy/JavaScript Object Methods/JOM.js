const person = {
    name: "Furkan",
    surname: "Saydur",
    id:2223,
    fullName: function(){
        return this.name + " " + this.surname;
    }
}
document.getElementById("demo").innerHTML = "My father is"+ " " + person.fullName();

// person.name = function(){
//     return ( this.name+ " " + this.surname).toUpperCase();
// };

// document.getElementById("demo").innerHTML = "My father is" + person.name("Cemal");