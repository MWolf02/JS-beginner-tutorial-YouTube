food = Number(prompt('how much was the food?'));
tipPercentage = Number(prompt('Tip %?')) / 100;
tipAmount = food * tipPercentage
total = food + tipAmount;

console.log('The tip amount is ' + tipAmount)
console.log('The total amount is ' + total)