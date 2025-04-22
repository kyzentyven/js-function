/*
 * Create a function that will return only the even numbers and also return the sum of them from an array
*/
function evenNumbersOnly(numbers){
    const evenNumbers = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}

const numbers = [22, 35, 20, 10, 66, 7, 9, 11, 8];
const evenNumbers = evenNumbersOnly(numbers);
console.log('Even numbers are: ', evenNumbers);

function sumOfEvenNumbers (numbers){
    let sum = 0;
    for(number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('Sum of even numbers :', sum);