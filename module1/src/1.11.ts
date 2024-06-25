{
  //--> ? = ternary operator = optional chaining = nullish coalescing = optional type <--//

  // ternary operator
  const age: number = 15;
  const isAdult = age >= 18 ? "adult" : "child";
  //   console.log({ isAdult });

  // nullish coalescing
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
  //   console.log({ result1, result2 });

  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string; //optional type
    };
  };
  const user: User = {
    name: "a",
    address: {
      city: "a",
      road: "a",
      presentAddress: "a",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "no permanent address";
  console.log({ permanentAddress });
}
