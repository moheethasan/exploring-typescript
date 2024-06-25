{
  // generic constraints with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle;

  const getPropertyValue = <T, X extends keyof T>(obj: T, key: X) => {
    return obj[key];
  };

  const user = { name: "a", age: 3, address: "ctg" };
  const result1 = getPropertyValue(user, "name");

  const car = { model: "Toyota", color: "gray" };
  const result2 = getPropertyValue(car, "color");
}
