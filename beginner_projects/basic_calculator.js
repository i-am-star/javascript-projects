const prompt = require ("prompt-sync")({sigint: true})

  let num1 = parseInt(prompt("enter a number:"));
let num2 = parseInt(prompt("enter another number:"));
let result = num1 + num2;
console.log ("The answer is: " + result);

let age = parseInt(prompt("Enter age:"));
console.log(age);
