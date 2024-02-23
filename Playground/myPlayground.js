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

// const introducer = (name, shirt) => {
//   const person = {
//     name,
//     shirt,
//     assets: 100000,
//     liabilities: 50000,
//     netWorth: function(){
//       return this.assets - this.liabilities;
//     }
//   }
//   const intro = `Hi, my name is ${person.name} and my shirt is ${person.shirt}. My net worth is $${person.netWorth()} USD`;

//   return intro;
// }
// console.log(introducer('Martin', 'black'));


// Loops - Loops are handy, if you want to run the same code over and over again, each time with a different value.

// const fruits = ['🍌', '🍎', '🍊', '🍐'];

// // bad practice - loop that runs through the array of "fruits" and console logs every index until the end of the array
// for(let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
// }

// // good practice - loop that runs through the array of "fruits" and console logs every index until the end of the array
// for(const fruit of fruits){
//   console.log(fruit)
// }

// // this function called double takes in numbers as a parameter, and returns an array of doubled numbers. It does that by using a for loop to iterate through the array and multiply each element by 2.
// const double = (numbers) =>{
//   let result = [];
//   for(const number of numbers){
//     result.push(number ** 2);
//   }
//   return result;
// }
// console.log(double([1, 2, 3, 4, 5, 6, 7, 8, 9]));


//Loop exercises

// This function takes the user input phrase, and counts how many latter are in that phrase. It takes a parameter called (phrase), starts with 0, and uses a for loop, to go through each letter in the phrase, and adds 1 to the count for each letter. In the end it returns the result. 

// const phrase = prompt('Say your phrase');
// const howManyLetters = (phrase) => {

//   let result = 0;

//   for(const index in phrase){
//     console.log(Number(index) + 1);
//     result = Number(index) + 1;
//   }
//   return {result};
// };

// console.log(howManyLetters(phrase));

// // This function takes an array of numbers and returns their sum. It uses a for loop to iterate through the array and add each number to the sum. In the end it returns the sum.
// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sumArray = (numbersArray) => {
//   let result = 0;
//   for(const number of numbersArray){
//     result += number;
//   }
//   return result;
// }

// console.log(sumArray(numbersArray));

// // This function takes an array of numbers and returns their max value. It uses a for loop to iterate through the array and compare each number to the max value. If the current number is greater than the max value, it updates the max value. When it is done looping through the array, it returns the max value. 
// let numbers = [1,2,4,5,4,6,20];

// const max = (numbers) =>{
//   let result = numbers[0];
//   for(const number of numbers){
//     if(number > result){
//       result = number;
//     }
//   }
//   return result;
// }

// // console.log(max(numbers));


// //These last two functions takes a phrase from the user input, and the first functions counts the frequency of each accuring letter, and the second function counts the frequency of each word. They both use for loops, and stores the frequency inside an object whilst looping through the array. The last function defines a varible called word, and tells it to split the phrase into an array of words, and then loops through the array and counts the frequency of each word. It then calls the first function, since they work similarly. 

// const phrase = prompt('type your phrase here');

// const letterFrequency = (phrase) =>{
//   let frequency = {};;
//   for(const letter of phrase){
//     if(letter in frequency){
//       frequency[letter]++;
//     }
//     else{
//       frequency[letter] = 1;
//     }
//     }
//   return frequency;
//   }

// console.log(letterFrequency(phrase));

// const wordFrequency = (phrase) =>{
//   const word = phrase.split(' ')
//   return letterFrequency(word);
// }
// console.log(wordFrequency(phrase));

//Advanced array methods

//.Map method - loops and returns an array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberDoubled = number.map(number => number * 2);
console.log(numberDoubled)

//.filter method - loops and returns an array with matching conditions

const nums = [1,2,3,4,5,6];
console.log(nums.filter(num => num > 3));

const actors = [
  {name: 'johnny', netWorth: 2000000},
  {name: 'amber', netWorth: 10},
  {name: 'leonardo', netWorth: 10000000},
  {name: 'abe', netWorth: 4000000},
  {name: 'jaguar', netWorth: 60000000},
  {name: 'citron', netWorth: 120000000},
]

let result = actors.filter(actor => actor.name[0] == 'j');
console.log(result);

let names = result.map(actor => actor.name).join(', ')

playground.innerHTML = `<h1>${names}</h1>`

//.reduce method - loops and returns a value - whenever you want a sum, use .reduce method
//.reduce takes in a function as an argument
//.reduce loops and gives you back the accumulator


// const nums = [1,2,3,4,5,6];

function sum(a, b){
  return a + b;
}

function mulitply(a, b){
  return a * b;
}

const sumArrayWithReduce = nums.reduce(mulitply);
  
console.log(sumArrayWithReduce);

const sumOfNetWorths = actors.reduce((a, b) => a + b.netWorth, 0);

console.log(sumOfNetWorths);