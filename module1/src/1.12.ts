{
  // nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("nothing to search");
    }
  };
  //   searchName(null);

  // unknown type
  const getSpeedMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const speed = (value * 1000) / 3600;
      console.log(`speed is ${speed} km^-1`);
    } else if (typeof value === "string") {
      const [speed, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
      console.log(`speed is ${convertedSpeed} km^-1`);
    } else {
      console.log("wrong input");
    }
  };
  //   getSpeedMeterPerSecond(null);

  // never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("emni");
}
