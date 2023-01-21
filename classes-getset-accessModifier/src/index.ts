const userListArea: HTMLElement | null = document.getElementById("user-list");

class User {
  private _firstName: string;
  private _lastName: string;
  protected _role: string;

  constructor(firstName: string, lastName: string, role: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._role = role;
  }

  public get getFirstName(): string {
    return this._firstName;
  }
  public get getLastName(): string {
    return this._lastName;
  }

  public get getRole(): string {
    return this._role;
  }

  public set setFirstName(firstName: string) {
    if (firstName.length <= 1)
      throw new Error("First Name length should bigger than 1");
    this._firstName = firstName;
  }
  public set setLastName(lastName: string) {
    if (lastName.length <= 1)
      throw new Error("Last Name length should bigger than 1");
    this._lastName = lastName;
  }
}

class Employee extends User {
  public get getRole(): string {
    // Can be accessible by protected modifier
    return this._role;
  }
}

const users: User[] = [
  new Employee("Ahmet", "KESKIN", "Front-end Developer"),
  new Employee("Mehmet", "YESEREN", "Back-end Developer"),
];

if (userListArea) {
  if (users.length > 0) {
    let userListTable: string = "";
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
  } else {
    userListArea.innerHTML = "<p style='color:red'> No user is available </p>";
  }
}
