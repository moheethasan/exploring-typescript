{
  //constraints
  const addCourseToStudent = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "next level web development";
    return { ...student, course };
  };

  const student1 = addCourseToStudent({
    id: 1,
    name: "x",
    email: "y",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 2,
    name: "x",
    email: "y",
    hasWatch: true,
  });
}
