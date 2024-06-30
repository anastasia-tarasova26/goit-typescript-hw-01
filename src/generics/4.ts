type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultUser: User = {
    name: "Mariia",
    surname: "Svidlo",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...initialValues };
}
const newParams = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(newParams);

export {};
