const courseListArea: HTMLElement | null =
  document.getElementById("course-list");

abstract class Course {
  // Properties of interface can't be private but
  // properties of abstract class can be priv ate

  private _name: string;
  private _price: number;
  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  public get getName(): string {
    return this._name;
  }

  public get getPrice(): number {
    return this._price;
  }
}

class ExclusiveCourse extends Course {
  gifts: string[];
  constructor(name: string, price: number, gifts: string[]) {
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

const courses: ExclusiveCourse[] = [];

courses.push(exCourse1, exCourse2);

if (courseListArea) {
  if (courses.length > 0) {
    let courseListTable: string = "";
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
  } else {
    courseListArea.innerHTML =
      "<p style='color:red'> No course is available </p>";
  }
}
