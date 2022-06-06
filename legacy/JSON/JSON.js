let text = `{"employees" : [` +
`{"firstName":"Beren", "lastName":"Saydur"},` +
`{"firstName":"Renard", "lastName":"Saydur"},` +
`{"firstName": "Ludvik", "lastName":"Saydur"}]}`;

const obj = JSON.parse(text);

document.getElementById("demo").innerHTML =
obj.employees[0].firstName + " " + obj.employees[0].lastName;

document.getElementById("demo2").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;

document.getElementById("demo3").innerHTML =
obj.employees[2].firstName + " " + obj.employees[2].lastName;
