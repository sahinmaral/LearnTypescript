const numbers = [1, 2, 3, 4, 5];
const firstNumberCanDivideSix = numbers.find((number) => number % 6 == 0);
console.log(Math.pow(firstNumberCanDivideSix, 2));
let user1 = {
    name: "sahin",
    id: 1234,
};
function getDbId(id) {
    if (typeof id == "string") {
        id = id.toUpperCase();
    }
    console.log(`Db id is ${id}`);
}
getDbId(2);
getDbId("9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08");
const javaArrayList = [1, 2, 3, "4"];
let seatAllotment;
//# sourceMappingURL=unions.js.map