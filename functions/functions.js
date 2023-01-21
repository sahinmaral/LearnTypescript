"use strict";
exports.__esModule = true;
function addTwo(number) {
    return number + 2;
}
function convertTextUppercase(text) {
    return text.toUpperCase();
}
function signUpUser(username, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return true;
}
var loginUser = function (username, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return true;
};
var newNumber = addTwo(5);
var convertedText = convertTextUppercase("hello world");
console.log(newNumber);
console.log(convertedText);
function evenOddCheck(number) {
    if (number % 2 == 0) {
        return "".concat(number, " is even");
    }
    else {
        return "".concat(number, " is odd");
    }
}
console.log(evenOddCheck(512));
var heros = ["thor", "spiderman", "ironman"];
var herosMap = heros.map(function (hero) {
    return "".concat(hero, " is hero");
});
herosMap.forEach(function (mapItem) {
    console.log(mapItem);
});
