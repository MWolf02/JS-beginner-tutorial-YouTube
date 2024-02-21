// let weather = prompt('How is the weather?');
// if(weather == 'rainy' || 'rain'){
//   console.log('Grab your umbrella ☔')
// } 
// else{
//   console.log('Wear your sunglasses 😎');
// }


// this is a function called 'greeting'
// and it has 1 argument called 'name'
// does: it logs out your name to console
// function greeting(name){
//   greet = `hi ${name}, Nice to meet you!`
//   console.log(greet)
// }

// greeting('Martin ')

// function sum(a, b){
//   return a + b;
// }
// // num1 = sum(3, 5);
// // console.log(num1);

// function calculateTotalFood(food, tip){
//   tipPercentage = tip / 100;
//   tipAmount = food * tipPercentage;
//   total = sum(food, tipAmount);
//   return total;
// }

// console.log(calculateTotalFood(200, 20));

//Arrays [] - An array is a data structure in programming that allows you to store multiple values of the same type or different types in a single variable. 

// const groceries = ['🍌', '🍎', '🍊', '🍐'];
// console.log(groceries);

// //grab a certain index from an array
// console.log(groceries[2]);

// //array methods
// //Array.push - push a new index onto the end of an array
// groceries.push('🍪', 'blueberry');

// //Array.Length - find the length of the array
// console.log(groceries.length)

// //Array.indexOf() - gives the index of a certain item in an array
// console.log(groceries.indexOf('🍐'));

// //Array.slice() - get a certain portion of an array
// console.log(groceries.slice(3, 6));



//Objects {} - Objects are a type of a variable, similar to arrays, but they use Key-Value pairs.

// const person1 = {
//   name: 'Leonardo',
//   shirt: 'white',
// }

// const person2 = {
//   name: 'Martin',
//   shirt: 'black',
// }

// // 2 ways to access objects: dot notation vs bracket notation
// // dot notation
// console.log(person1.name);
// // bracket notation
// console.log(person1['name']);

// //assignt objects
// person1.phone = '1-222-333-4444';
// console.log(person1.phone);

// console.log(person1);
// console.log(person2);

// This is an ES6 arrow function.
// It takes 2 arguments: 'name' and 'shirt'.
// It defines an object with properties for a person, including 'name', 'shirt', 'assets', 'liabilities', and 'netWorth'.
// Inside the object, there's a method named 'netWorth' which calculates the net worth by subtracting liabilities from assets.
// The function constructs an introduction string using template literals.
// 'name' and 'shirt' arguments are used to populate the introduction.
// The function returns the introduction string.

const introducer = (name, shirt) => {
    const person = {
      name,
      shirt,
      assets: 100000,
      liabilities: 50000,
      netWorth: function(){
        return this.assets - this.liabilities;
      }
    }
    const intro = `Hi, my name is ${person.name} and my shirt is ${person.shirt}. My net worth is $${person.netWorth()} USD`;
  
    return intro;
  }
  console.log(introducer('Martin', 'black'));