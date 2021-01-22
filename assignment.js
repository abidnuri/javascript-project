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
        var total = watch * 50 + phone * 100 + laptop * 500;
        return total;
    }
}
var result = budgetCalculator(1, 2, 1);
console.log(result);


