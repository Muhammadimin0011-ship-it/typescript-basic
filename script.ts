type User = {
  name: string;
  age: number;
  isStudent: boolean;
};

function User({ name, age, isStudent }: User): void {
  console.log(name);
  console.log(age);
  console.log(isStudent);
}
