function addTwo(number: number) {
  return number + 2;
}

function convertTextUppercase(text: string): string {
  return text.toUpperCase();
}

function signUpUser(
  username: string,
  email: string,
  password: string,
  isPaid: boolean = false
): boolean {
  return true;
}

let loginUser = (
  username: string,
  email: string,
  isPaid: boolean = false
): boolean => {
  return true;
};

let newNumber: number = addTwo(5);
let convertedText: string = convertTextUppercase("hello world");

console.log(newNumber);
console.log(convertedText);

function evenOddCheck(number: number): string {
  if (number % 2 == 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
}

console.log(evenOddCheck(512));

const heros = ["thor", "spiderman", "ironman"];

const herosMap: string[] = heros.map((hero): string => {
  return `${hero} is hero`;
});

herosMap.forEach((mapItem): void => {
  console.log(mapItem);
});

export {};
