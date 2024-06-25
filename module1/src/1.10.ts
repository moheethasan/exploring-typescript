{
  // union type
  type FrontendDev = "l developer" | "junior developer";
  type FullstackDev = "frontend developer" | "junior developer";
  type Developer = FrontendDev | FullstackDev;
  const newDeveloper: Developer = "junior developer";

  type User = {
    name: string;
    age: number;
    gender: "male" | "female";
    bloodGroup: "a+" | "b+" | "ab+";
  };
  const user: User = {
    name: "a",
    age: 3,
    gender: "male",
    bloodGroup: "a+",
  };

  // intersection type
  type FrontendDeveloper = {
    skills: string[];
    designation1: "frontend developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "backend developer";
  };
  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["html", "css", "express"],
    designation1: "frontend developer",
    designation2: "backend developer",
  };
}
