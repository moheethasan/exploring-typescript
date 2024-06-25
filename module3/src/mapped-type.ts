{
  //
  type Person = {
    id: number;
    name: string;
    age: number;
  };

  //   type PersonReadOnly = {
  //     readonly id: number;
  //     readonly name: string;
  //     readonly age: number;
  //   };

  //mapped type
  type PersonReadOnly = { readonly [key in keyof Person]: Person[key] };

  const person: PersonReadOnly = {
    id: 1,
    name: "abc",
    age: 10,
  };
  // person.id = 2;

  //
}
