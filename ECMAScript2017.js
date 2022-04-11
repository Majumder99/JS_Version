// //JavaScript String padding
// JavaScript Object.entries
// JavaScript Object.values
// JavaScript async functions
// JavaScript shared memory
let str = "5";
str = str.padStart(40, 1); // Start of 5
// str = str.padEnd(40, 1);// At the end
console.log(str);

// JS Object values
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
// document.getElementById("demo").innerHTML = Object.entries(person); // Will show all entries
document.getElementById("demo").innerHTML = Object.values(person); // Will show all values
