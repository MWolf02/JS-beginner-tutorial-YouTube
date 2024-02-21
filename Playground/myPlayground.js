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

const groceries = ['🍌', '🍎', '🍊', '🍐'];
console.log(groceries);

//grab a certain index from an array
console.log(groceries[2]);

//array methods
//Array.push - push a new index onto the end of an array
groceries.push('🍪', 'blueberry');

//Array.Length - find the length of the array
console.log(groceries.length)

//Array.indexOf() - gives the index of a certain item in an array
console.log(groceries.indexOf('🍐'));

//Array.slice() - get a certain portion of an array
console.log(groceries.slice(3, 6));
