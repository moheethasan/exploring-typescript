{
  // destructuring
  const user = {
    id: 123,
    name: {
      firstName: "a",
      middleName: "b",
      lastName: "c",
    },
    contactNumber: 123444444444,
    address: "abc road",
  };

  const {
    contactNumber,
    name: { firstName: username },
  } = user;

  // array destructuring
  const friends: string[] = ["a", "b", "c", "d", "e"];
  const [, , ccc, ...rest] = friends;
}
