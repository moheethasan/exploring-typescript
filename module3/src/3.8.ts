{
  //polymorphism
  class Person {
    getSleep() {
      console.log("i am sleeping 8 hours per day.");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("i am sleeping 7 hours per day");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("i am sleeping 6 hours per day");
    }
  }

  const getPersonSleep = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  // getPersonSleep(person1);
  // getPersonSleep(person2);
  // getPersonSleep(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const area1 = new Shape();
  const area2 = new Circle(10);
  const area3 = new Rectangle(1, 2);

  getShapeArea(area1);
  getShapeArea(area2);
  getShapeArea(area3);
}
