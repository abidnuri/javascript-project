// https://github.com/abidnuri/javascript-project
// First Problem kilometerToMeter
function kilometerToMeter(kilometer) {
    var kilometer = kilometer * 1000;
    if (kilometer < 0) {
        return "Please use positive number."
    }
    else {
        return kilometer;
    }
}
var meter = kilometerToMeter(8);
console.log(meter);

// Second Problem budgetCalculator
// WatchPrice = 50, PhonePrice = 100, LaptopPrice = 500
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0) {
        return "Error! Put The Right Value Of Watch."
    }
    else if (phone < 0) {
        return "Error! Put The Right Value Of Phone."
    }
    else if (laptop < 0) {
        return "Error! Put The Right Value Of Laptop."
    }
    else {
        var total = (watch * 50) + (phone * 100) + (laptop * 500);
        return total;
    }
}
var result = budgetCalculator(1, 3, 1);
console.log(result);

// Third Problem hotelCost
function hotelCost(time) {
    var cost = 0;
    if(time<0){
        return "Error! Time can't Negative."
    }
    else if (time <= 10) {
        cost = time * 100;
    }
    else if (time <= 20) {
        var firstStay = 10 * 100;
        var remainingTime = time - 10;
        var secondStay = remainingTime * 80;
        cost = firstStay + secondStay;
    }
    else {
        var firstStay = 10 * 100;
        var secondStay = 10 * 80;
        var remainingTime = time - 20;
        var thirdStay = remainingTime * 50;
        cost = firstStay + secondStay + thirdStay;
    }
    return cost;
}
var result = hotelCost(30);
console.log(result);
