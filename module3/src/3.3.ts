{
  //typeof --> type guard
  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add(2, 3);
  //   console.log(result);

  //in guard
  type NormalUser = { name: string };
  type AdminUser = { name: string; role: "admin" };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and the role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "normal",
  };
  const adminUser: AdminUser = {
    name: "normal",
    role: "admin",
  };

  getUser(adminUser);
}
