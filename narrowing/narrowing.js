function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function printAllBestPractice(strs) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_2 = strs; _i < strs_2.length; _i++) {
                var s = strs_2[_i];
                //(parameter) strs: string[]
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
            //(parameter) strs: string
        }
    }
}
function printUsers(account) {
    console.log(account.name);
    console.log(account.surname);
    // The in operator narrowing
    if ("roles" in account) {
        account.roles.forEach(function (role) {
            console.log(role);
        });
    }
}
function convertValue(value) {
    if (value instanceof Date) {
        return value.toUTCString();
    }
    else {
        return value.toUpperCase();
    }
}
function isFish(pet) {
    return pet.swim() !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        // without using pet is Fish , Typescript will get confused
        // It's like returns boolean and value at the same time
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
function getArea(shape) {
    if (shape.kind == "square") {
        return Math.pow(shape.sideLength, 2);
    }
    else if (shape.kind == "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        var _defaultForShape = shape;
        return _defaultForShape;
    }
}
console.log(getArea({
    sideLength: 10,
    kind: "square"
}));
console.log(getArea({
    kind: "circle",
    radius: 20
}));
