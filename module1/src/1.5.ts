// reference type --> object
const user: {
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  company: "toto"; //literal types
  //   readonly company: string;
  position: string;
  isMarried: boolean;
} = {
  firstName: "a",
  lastName: "b",
  company: "toto",
  position: "manager",
  isMarried: false,
};

// user.company = "ph";
