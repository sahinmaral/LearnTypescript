"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const savedUsers = [
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
}
class SavedUser extends User {
    constructor() {
        super(...arguments);
        this.isActive = false;
    }
}
function loginUser(user) {
    const isExists = savedUsers.find((savedUser) => savedUser.name == user.name && savedUser.email == user.email);
    if (isExists) {
        if (isExists.isActive) {
            console.log("User already logged-in");
        }
        else {
            console.log("User logged-in");
        }
    }
    else {
        console.log("User doesn't exists");
    }
}
loginUser({
    name: "sahinN",
    email: "sahin.maral@hotmail.com",
});
function createUser(user) {
    if (user.name != null && user.email != null) {
        return { message: "User successfully created" };
    }
    else {
        return { message: "User name or email is null. Try again" };
    }
}
const createUserStatus = createUser({
    name: "mehmet",
    email: "mehmet.maral@hotmail.com",
});
console.log(createUserStatus.message);
function printCoord(pt) {
    console.log(`x point : ${pt.x}`);
    console.log(`x point : ${pt.y}`);
}
printCoord({ x: 500, y: 500 });
class Employee {
}
let employee1 = {
    name: "sahin",
    skills: ["react", "javascript", "c#"],
    description: "Description1",
};
console.log(employee1.skills);
employee1.skills.push("node-js");
if (employee1.description != null)
    console.log(employee1.description.toUpperCase());
console.log(employee1.skills);
//# sourceMappingURL=objects.js.map