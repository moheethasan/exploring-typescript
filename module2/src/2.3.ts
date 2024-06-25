{
  // generic type
  type Generic<T> = Array<T>;
  const rollNumbers: Generic<number> = [1, 2, 3];
  const mentors: Generic<string> = ["a", "b", "c"];
  const boolArray: Generic<boolean> = [true, false, true];

  const user: Generic<{ name: string; age: number }> = [
    {
      name: "a",
      age: 3,
    },
    {
      name: "b",
      age: 1,
    },
  ];

  //   generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const life: GenericTuple<string, string> = ["mrx", "mrsx"];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "a", email: "abc@gmail.com" },
  ];
}
