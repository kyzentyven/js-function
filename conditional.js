function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(10));

function isOdd(number){
    if(number % 2 !== 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isOdd(5));
console.log(isOdd(10));