function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const bill = add(10, 20);
console.log('Total: ', bill);

function add2(price1, price2){
    return price1 + price2;
}

const bill2 = add(20, 5);
console.log('New bill: ', bill2);

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mul = num1 * num2;
    const result = mul / 2;
    return result;
}

const result = doMath(10, 5);
console.log(result);