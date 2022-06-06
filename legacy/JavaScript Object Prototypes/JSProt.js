function Person(name,surname,language,nationality){
    this.name = name;
    this.surname = surname;
    this.language = language;
    this.nationality = nationality;
}
// Person.prototype.branch = branch;
Person.prototype.nimero = function(){
    return this.surname + " " + this.name
};

const persona = new Person("Eren","Yeğer","High Andalish","Andal","Sayduric")

document.getElementById("demo").innerHTML = persona.nimero();

//Burada prototype ile bir değer ekledikten sonra yazdırmayı denemelisin. Bu da şöyle olur fonksiyon içerisinde eklenen değeri girdikten sonra document ile yazdırmaya çalışılınır. Yazı ise mutlaka ki new Person ile aynı olmalıdır.