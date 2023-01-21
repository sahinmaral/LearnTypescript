"use strict";
exports.__esModule = true;
var mySeatChoice = 2 /* SeatChoice.WINDOW */;
function printSeatChoice(seatChoice) {
    switch (seatChoice) {
        case 1 /* SeatChoice.MIDDLE */:
            console.log("Middle");
            break;
        case 2 /* SeatChoice.WINDOW */:
            console.log("Window");
            break;
        default:
            console.log("Aisle");
            break;
    }
}
printSeatChoice(mySeatChoice);
