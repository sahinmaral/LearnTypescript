// If you aren't going to write const keyword at enum
// typescript will generate very long javascript codes
const enum SeatChoice {
  AISLE = 0,
  MIDDLE = 1,
  WINDOW = 2,
}

const mySeatChoice = SeatChoice.WINDOW;

function printSeatChoice(seatChoice: SeatChoice): void {
  switch (seatChoice) {
    case SeatChoice.MIDDLE:
      console.log("Middle");
      break;
    case SeatChoice.WINDOW:
      console.log("Window");
      break;
    default:
      console.log("Aisle");
      break;
  }
}

printSeatChoice(mySeatChoice);

export {};
