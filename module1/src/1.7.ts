// learn spread operator
const friends1: string[] = ["a", "b", "c"];
const friends2: string[] = ["d", "e", "f"];
friends1.push(...friends2);

const mentor1 = {
  typeScript: "mezba",
  redux: "mir",
  dbms: "mizan",
};
const mentor2 = {
  prisma: "firoz",
  next: "tanmoy",
  cloud: "nahid",
};
const mentorList = {
  ...mentor1,
  ...mentor2,
};

// learn rest operator
const greetFriends = (...friends: string[]) => {
  //   console.log(`hi ${friend1}, ${friend2}, ${friend3}`);
  friends.forEach((friend: string) => console.log(`hi ${friend}`));
};
greetFriends("a", "b", "c", "d");
