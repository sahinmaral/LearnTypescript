const savedUsers: SavedUser[] = [
  {
    name: "sahin",
    email: "sahin.maral@hotmail.com",
    isActive: true,
  },
  {
    name: "ali",
    email: "ali.maral@hotmail.com",
    isActive: false,
  },
  {
    name: "ahmet",
    email: "ahmet.keskin@hotmail.com",
    isActive: true,
  },
];

class User {
  name: string;
  email: string;
}

class SavedUser extends User {
  isActive: boolean = false;
}

function loginUser(user: User) {
  const isExists: SavedUser | undefined = savedUsers.find(
    (savedUser) => savedUser.name == user.name && savedUser.email == user.email
  );

  if (isExists) {
    if (isExists.isActive) {
      console.log("User already logged-in");
    } else {
      console.log("User logged-in");
    }
  } else {
    console.log("User doesn't exists");
  }
}

loginUser({
  name: "sahinN",
  email: "sahin.maral@hotmail.com",
});

function createUser(user: User): { message: string } {
  if (user.name != null && user.email != null) {
    return { message: "User successfully created" };
  } else {
    return { message: "User name or email is null. Try again" };
  }
}

const createUserStatus: { message: string } = createUser({
  name: "mehmet",
  email: "mehmet.maral@hotmail.com",
});

console.log(createUserStatus.message);

// Type

type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log(`x point : ${pt.x}`);
  console.log(`x point : ${pt.y}`);
}

printCoord({ x: 500, y: 500 });

// Readonly and optional

class Employee {
  name: string;
  readonly skills: string[];
  description?: string;
}

let employee1: Employee = {
  name: "sahin",
  skills: ["react", "javascript", "c#"],
  description: "Description1",
};

console.log(employee1.skills);

employee1.skills.push("node-js");

if (employee1.description != null)
  console.log(employee1.description.toUpperCase());

console.log(employee1.skills);

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
