/*
 * For a given string tell me whether it has even number of characters or not
*/
function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('Even sized string');
        return true;
    }
    else{
        console.log('Odd sized string');
        return false;
    }
}

evenSizedString('Dhaka');
evenSizedString('Feni');

// Using boolean parameters
function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(10, false));

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

numberOfElements([10, 5, 9, 66, 35, 22, 69]);

function getAge(person){
    const age = person.age;
    return age;
}