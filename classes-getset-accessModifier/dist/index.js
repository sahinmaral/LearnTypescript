"use strict";
const userListArea = document.getElementById("user-list");
class User {
    constructor(firstName, lastName, role) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._role = role;
    }
    get getFirstName() {
        return this._firstName;
    }
    get getLastName() {
        return this._lastName;
    }
    get getRole() {
        return this._role;
    }
    set setFirstName(firstName) {
        if (firstName.length <= 1)
            throw new Error("First Name length should bigger than 1");
        this._firstName = firstName;
    }
    set setLastName(lastName) {
        if (lastName.length <= 1)
            throw new Error("Last Name length should bigger than 1");
        this._lastName = lastName;
    }
}
class Employee extends User {
    get getRole() {
        // Can be accessible by protected modifier
        return this._role;
    }
}
const users = [
    new Employee("Ahmet", "KESKIN", "Front-end Developer"),
    new Employee("Mehmet", "YESEREN", "Back-end Developer"),
];
if (userListArea) {
    if (users.length > 0) {
        let userListTable = "";
        userListTable += "<table>";
        userListTable += "<tr>";
        userListTable += "<th>First Name</th>";
        userListTable += "<th>Last Name</th>";
        userListTable += "<th>Role</th>";
        userListTable += "</tr>";
        users.forEach((user) => {
            userListTable += "<tr>";
            userListTable += `<td>${user.getFirstName}</td>`;
            userListTable += `<td>${user.getLastName}</td>`;
            userListTable += `<td>${user.getRole}</td>`;
            userListTable += "</tr>";
        });
        userListTable += "</table>";
        userListArea.innerHTML = userListTable;
    }
    else {
        userListArea.innerHTML = "<p style='color:red'> No user is available </p>";
    }
}
