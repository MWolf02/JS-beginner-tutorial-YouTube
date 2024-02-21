/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const div = (a, b) => a / b;

const mul = (a, b) => a * b;

const print = () => {
let a = add(2, 3);
let b = sub(5, 3);
let c = div(10, 2);
let d = mul(2, 3);
  return[a, b, c, d];
};
console.log(print());
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/