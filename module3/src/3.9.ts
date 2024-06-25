{
  //abstraction --> interface, abstract

  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("starting car engine");
    }
    stopEngine(): void {
      console.log("stopping car engine");
    }
    move(): void {
      console.log("car is moving now");
    }
    test() {
      console.log("random testing");
    }
  }

  const toyota = new Car1();
  //   toyota.startEngine();

  //idea
  abstract class Car2 implements Vehicle1 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("random testing");
    }
  }

  //implementation
  class Honda extends Car2 {
    startEngine(): void {
      console.log("engine starting soon");
    }
    stopEngine(): void {
      console.log("engine stopping soon");
    }
    move(): void {
      console.log("car will move in no time");
    }
  }

  //   const honda = new Car2();
  //   honda.startEngine()
}
