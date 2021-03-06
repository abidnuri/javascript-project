// https://github.com/abidnuri/javascript-project
// First Problem kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Error! Please use positive number."
    }
    else {
        var meter = kilometer * 1000;
    }
    return meter;
}
var findMeter = kilometerToMeter(5);
console.log(findMeter);

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
    }
    return total;
}
var result = budgetCalculator(1, 3, 1);
console.log(result);

// Third Problem hotelCost
function hotelCost(time) {
    var cost = 0;
    if (time < 0) {
        return "Error! Time can't be Negative."
    }
    // Staying 10 days or less than 10 days
    else if (time <= 10) {
        cost = time * 100;
    }
    // Staying 20 days or less than 20 days
    else if (time <= 20) {
        var firstStay = 10 * 100;
        var remainingTime = time - 10;
        var secondStay = remainingTime * 80;
        cost = firstStay + secondStay;
    }
    // Staying 21 days or extra
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

// Fourth Problem megaFriend
function megaFriend(name) {
    var friendName = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (name[i] == 0) {
            return "Error! Please input name."
        }
        else if (element.length > friendName.length) {
            friendName = element;
        }
    }
    return friendName;
}
var result = ['Abid', 'Nuri', 'Saiful', 'Ayrin', 'Jashim Builders', 'Aasim'];
console.log(megaFriend(result));