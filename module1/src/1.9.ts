{
  //type alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    contact?: number;
    address: string;
  };
  const student1: Student = {
    name: "a",
    age: 23,
    gender: "b",
    address: "c",
  };
  const student2: Student = {
    name: "a",
    age: 25,
    gender: "b",
    contact: 10344,
    address: "c",
  };

  type UserName = string;
  const username: UserName = "a";

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
