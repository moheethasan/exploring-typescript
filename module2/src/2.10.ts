{
  //mapped type
  const arrOfNumbers: number[] = [1, 2, 3];
  //   const arrOfStrings:string[]=['1','2','3']
  const arrOfStrings = arrOfNumbers.map((number) => number.toString());
  //   console.log(arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; //look up type

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };
  const area: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 10,
  };
}
