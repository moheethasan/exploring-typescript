{
  // generic function
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res = createArrayWithGeneric<number>(1);
  interface User {
    name: string;
    age: number;
  }
  const genericObj = createArrayWithGeneric<User>({ name: "a", age: 2 });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const resp = createArrayWithTuple<string, number>("bd", 71);
  const resObj = createArrayWithTuple<string, { region: string }>("bd", {
    region: "asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "next level web development";
    return { ...student, course };
  };
  const student1 = addCourseToStudent({
    name: "x",
    email: "y",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "x",
    email: "y",
    hasWatch: true,
  });
}
