const name = document.getElementById("firstName").value; //con getElementNyId
console.log(name);

const lastName = document.getElementById("lastName").value;
console.log(lastName);

const age = document.querySelector("#age").value; //con querySelector
console.log(age);

const persons = { name: "Mario", lastName: "Rossi", age: "25" };
console.table(persons);

const html = document.documentElement;
html.children[1];

const body = html.children[1];
body.children[0];

const divContainer = body.children[0];
divContainer.children[0];

const form = divContainer.children[0];
form.setAttribute('data-person', JSON.stringify(persons));
