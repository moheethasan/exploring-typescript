{
  //utility type
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  //1. Pick
  type NameAge = Pick<Person, "name" | "age">;
  //2. Omit
  type ContactInfo = Omit<Person, "name" | "age">;
  //3. Required
  type PersonRequired = Required<Person>;
  //4. Partial
  type PersonPartial = Partial<Person>;
  //5. Readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "a",
    age: 1,
    contactNo: "111",
  };
  //person1.name = "b";
  //6. Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  //   type MyObj = Record<string, string>;
  type MyObj = Record<string, unknown>;
  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: 1,
    d: true,
    e: [1, 2],
  };
}
