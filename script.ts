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
  category: "mobile",
};

const car: Car = {
  brand: "Cadillac",
  model: "escalate",
  year: 2022,
  isElectric: false,
  price: 2000000,
};

const user: User = {
  name: "Muhammademin",
  age: 15,
  email: "example@gmail.com",
  skills: ["html, css, js, react, node, dart, ts"],
  isAdmin: false,
};

type User = {
  name: string;
  age: number;
  email: string;
  skills: string[];
  isAdmin: boolean;
  phone?: string;
};

const user1: User = {
  name: "Muhammademin",
  age: 15,
  email: "example@gmail.com",
  skills: ["html", "css", "js", "ts", "react"],
  isAdmin: false,
  phone: "991234567",
};

const user2: User = {
  name: "toshmat",
  age: 19,
  email: "eexample@gmail.com",
  skills: ["nothing"],
  isAdmin: true,
};
