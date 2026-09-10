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

const student: Student = {
  name: "Muhammademin",
  age: 15,
  isStudent: true,
  course: "frontend developer",
};

const product: Product = {
  title: "iPhone 11 pro",
  price: 200,
  isAvailable: true,
  category: "mobile" 
}
