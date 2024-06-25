{
  // generic interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Amire",
    computer: {
      brand: "Asus",
      model: "244UR",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OlED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich",
    computer: {
      brand: "HP",
      model: "24445UR",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "kws324",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "200cc",
    },
  };
}
