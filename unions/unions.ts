const numbers: number[] = [1, 2, 3, 4, 5];

const firstNumberCanDivideSix: number | undefined = numbers.find(
  (number) => number % 6 == 0
);

// Careful for working with union type declaration

console.log(Math.pow(firstNumberCanDivideSix, 2));

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let user1: User | Admin = {
  name: "sahin",
  id: 1234,
};

function getDbId(id: number | string) {
  if (typeof id == "string") {
    id = id.toUpperCase();
  }
  console.log(`Db id is ${id}`);
}

getDbId(2);
getDbId("9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08");

const javaArrayList: (string | number)[] = [1, 2, 3, "4"];

let seatAllotment : "aisle" | "window" | "middle"


//seatAllotment = "crew"        # Gives error