"use strict";
const courseListArea = document.getElementById("course-list");
class Course {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    get getName() {
        return this._name;
    }
    get getPrice() {
        return this._price;
    }
}
class ExclusiveCourse extends Course {
    constructor(name, price, gifts) {
        // We can't use super at interface
        super(name, price);
        this.gifts = gifts;
    }
}
const exCourse1 = new ExclusiveCourse("React-JS Tutorial", 2000, [
    "hat",
    "pencil",
]);
const exCourse2 = new ExclusiveCourse("Node-JS Tutorial", 2000, [
    "hat",
    "pencil",
]);
const courses = [];
courses.push(exCourse1, exCourse2);
if (courseListArea) {
    if (courses.length > 0) {
        let courseListTable = "";
        courseListTable += "<table>";
        courseListTable += "<tr>";
        courseListTable += "<th>Name</th>";
        courseListTable += "<th>Price</th>";
        courseListTable += "<th>Gifts</th>";
        courseListTable += "</tr>";
        courses.forEach((course) => {
            courseListTable += "<tr>";
            courseListTable += `<td>${course.getName}</td>`;
            courseListTable += `<td>${course.getPrice}</td>`;
            courseListTable += `<td>${course.gifts}</td>`;
            courseListTable += "</tr>";
        });
        courseListTable += "</table>";
        courseListArea.innerHTML = courseListTable;
    }
    else {
        courseListArea.innerHTML =
            "<p style='color:red'> No course is available </p>";
    }
}
