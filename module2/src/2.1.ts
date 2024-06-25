{
  // type assertion
  let anything: any;
  anything = "aaa";
  // (anything as string).

  const kgToGram = (value: string | number) => {
    if (typeof value === "number") {
      return value * 1000;
    } else if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `the value will be ${convertedValue}`;
    }
  };
  const result1 = kgToGram(1000) as number;
  const result2 = kgToGram("1000") as string;

  type CustomError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
