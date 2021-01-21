// https://github.com/abidnuri/javascript-project
// First Problem kilometerToMeter
function kilometerToMeter(kilometer) {
    var kilometer = kilometer * 1000;
    if (kilometer < 0) {
        return "Please use positive number."
    }
    else{
        return kilometer;
    }
}
var meter = kilometerToMeter(1);
console.log(meter);