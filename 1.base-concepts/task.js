"use strict"
function solveEquation(a, b, c) {
    let arr = [];
    let discriminant = Math.pow(b,2) - 4 * a * c;
    if(discriminant == 0){
        arr[0] = -b / (2 * a);
    }
    else if(discriminant > 0){
        arr[0]=(- b + Math.sqrt(discriminant)) / (2 * a);
        arr[1]=(- b - Math.sqrt(discriminant)) / (2 * a);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthPercent = (percent / 100) / 12;
    let creditBody = amount - contribution;
    let monthPay = creditBody * (monthPercent + (monthPercent / (Math.pow((1 + monthPercent),countMonths) - 1)));
    let summPay = monthPay * countMonths;
    return parseFloat(summPay.toFixed(2));
}