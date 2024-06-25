{
  // interface
  type User1 = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
  }
  const user1: User2 = {
    name: "a",
    age: 1,
  };

  type UserWithRole1 = User1 & { role: string };
  interface UserWithRole2 extends User1 {
    role: string;
  }
  const user2: UserWithRole2 = {
    name: "a",
    age: 1,
    role: "a",
  };
  //js-> object, array->object, function->object
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const RollNumber: Roll2 = [1, 2, 3];

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;
}
