/*
 * Write a function to give me the sum of all numbers in an array
 * Step-1: Declare a function
 * Step-2: Check whether the function is called properly
 * Step-3: Set a parameter
 * Step-4: Pass the parameter and check whether the parameter is passed in a proper format
 * Step-5: Do the function task (Step by step)
*/
function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const arrayNumbers = [10, 9, 7, 11, 35];
const sum = sumOfNumbers(arrayNumbers);
console.log('Sum of all numbers: ', sum);