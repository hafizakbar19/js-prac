let currencyOne = 100;
let currencyTwo = 0;
let exchageRate = 278;

function currencyConverter (amount,rate){
    return amount * rate;
}

currencyTwo = currencyConverter(currencyOne,exchageRate);

console.log(currencyTwo);