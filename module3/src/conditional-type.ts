{
  //
  type CheckString<T> = T extends string ? string : unknown;

  type IsString = CheckString<string>;

  //

  interface Person {
    name: string;
    age: number;
  }

  type HasOwnProperty<T> = T extends keyof Person ? true : false;

  type Checking = HasOwnProperty<"name">;
  //
}
