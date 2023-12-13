/*
One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

*/
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 165.45;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInGBP = valueInYen * 0.0055;
    return valueInGBP;
}

const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};