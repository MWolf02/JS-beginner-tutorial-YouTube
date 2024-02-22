// Loop exercises

// This function takes the user input phrase and counts how many letters are in that phrase.
// It takes a parameter called (phrase), initializes a count variable to 0, and uses a for loop to iterate through each letter in the phrase.
// For each letter, it increments the count by 1.
// Finally, it returns the count.
const phrase = prompt("type your phrase here");
const howManyLetters = (phrase) => {
  let result = 0;
  for (const index in phrase) {
    console.log(Number(index) + 1);
    result = Number(index) + 1;
  }
  return { result };
};
console.log(howManyLetters(phrase));

// This function takes an array of numbers and returns their sum.
// It uses a for loop to iterate through the array and add each number to the sum.
// Finally, it returns the sum.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumArray = (numbersArray) => {
  let result = 0;
  for (const number of numbersArray) {
    result += number;
  }
  return result;
};
console.log(sumArray(numbersArray));

// This function takes an array of numbers and returns their max value.
// It uses a for loop to iterate through the array and compare each number to the max value.
// If the current number is greater than the max value, it updates the max value.
// Finally, it returns the max value.
let numbers = [1, 2, 4, 5, 4, 6, 20];
const max = (numbers) => {
  let result = numbers[0];
  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
};

// console.log(max(numbers));

// These last two functions take a phrase from the user input.
// The first function counts the frequency of each occurring letter.
// The second function counts the frequency of each word.
// They both use for loops to iterate through the array and store the frequency inside an object.
// The last function splits the phrase into an array of words and counts the frequency of each word by calling the first function.
const letterFrequency = (phrase) => {
  let frequency = {};
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};
console.log(letterFrequency(phrase));

const wordFrequency = (phrase) => {
  const word = phrase.split(" ");
  return letterFrequency(word);
};
console.log(wordFrequency(phrase));
