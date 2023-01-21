class User {
  private _firstName: string;
  private _lastName: string;
  private _age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  private checkAge(age: number): Error | boolean {
    if (age <= 0) throw new Error("Age cannot be less equal than zero");
    return true;
  }

  private checkFirstName(firstName: string): Error | boolean {
    if (firstName.length === 0) {
      throw new Error("Length of firstName cannot be zero");
    }
    return true;
  }

  private checkLastName(lastName: string): Error | boolean {
    if (lastName.length === 0) {
      throw new Error("Length of lastName cannot be zero");
    }
    return true;
  }

  public get getFirstName(): string {
    return this._firstName;
  }

  public get getLastName(): string {
    return this._lastName;
  }

  public get getAge(): number {
    return this._age;
  }

  public set setFirstName(firstName: string) {
    if (this.checkFirstName(firstName)) this._firstName = firstName;
  }

  public set setLastName(lastName: string) {
    if (this.checkLastName(lastName)) this._lastName = lastName;
  }

  public set setAge(age: number) {
    if (this.checkAge(age)) this._age = age;
  }
}

export default User;
