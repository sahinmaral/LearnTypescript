interface User {
  readonly _id: string;
  firstName: string;
  surname: string;
  birthDate: Date;
  startTrial: () => string;
  //startTrial() : string
  getCoupon(couponName: string): number;
}

interface User {
  description: string;
}

interface Admin extends User {
  // An interface and type property cannot have an initializer
  // readonly role: string = "admin";

  readonly role: "admin";
}



const userExample: User = {
  _id: "22222",
  firstName: "test",
  surname: "user",
  birthDate: new Date(2000, 1, 1),
  description: "description1",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (couponName: string) => {
    switch (couponName) {
      case "coupon-jan":
        return 10;
      case "coupon-feb":
        return 30;
      default:
        return 2;
    }
  },
};

export {};
