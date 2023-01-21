function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

function printAllBestPractice(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        //(parameter) strs: string[]
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
      //(parameter) strs: string
    }
  }
}

interface User {
  name: string;
  surname: string;
}

interface Employee {
  name: string;
  surname: string;
  roles: string[];
}

function printUsers(account: User | Employee) {
  console.log(account.name);
  console.log(account.surname);

  // The in operator narrowing
  if ("roles" in account) {
    account.roles.forEach((role) => {
      console.log(role);
    });
  }
}

function convertValue(value: Date | string) {
  if (value instanceof Date) {
    return value.toUTCString();
  } else {
    return value.toUpperCase();
  }
}

type Fish = { swim: () => {} };
type Bird = { fly: () => {} };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim() !== undefined;
}

function getFood(pet: Fish | Bird): string {
  if (isFish(pet)) {
    pet;
    // without using pet is Fish , Typescript will get confused
    // It's like returns boolean and value at the same time
    return "Fish food";
  } else {
    pet;
    return "Bird food";
  }
}

// Discriminated unions

// interface Shape {
//   kind: string;
// }

// interface Circle extends Shape{
//     kind:"circle"
//     radius:number
// }

// interface Square extends Shape{
//     kind:"square"
//     sideLength:number
// }

type Circle = {
    readonly kind:"circle"
    radius:number
}

type Square = {
    readonly kind:"square"
    sideLength:number
}

type Shape = Circle | Square

function getArea(shape:Shape){
    if(shape.kind == "square"){
        return Math.pow(shape.sideLength,2)
    }else if(shape.kind == "circle"){
        return Math.PI * Math.pow(shape.radius,2)
    }else{
        const _defaultForShape : never = shape
        return _defaultForShape
    }
}

console.log(getArea({
    sideLength : 10,
    kind:"square"
}))

console.log(getArea({
    kind : "circle",
    radius : 20
}))
