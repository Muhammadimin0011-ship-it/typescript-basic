// Partial - bu type dagi barchasini ixtioriy qiladi

type User = {
  name: string;
  age: number;
  email: string;
};

const user: Partial<User> = {
  name: "Muhammademin",
};

type User = {
  name1?: string;
  age: number;
  email: string;
};

// Required - bu type dagi barchasini majburiy qiladi

type User = {
  name: string;
  age: number;
  email: string;
};

const user: Required<User> = {
  name: "Muhammademin",
  age: 15,
  email: "example@gmail.com",
};

//Readonly - bu type dagi barchasini ozgartirishga taqiq qoyadi

type User = {
  name: string;
  age: number;
  email: string;
};

const user: Readonly<User> = {
  name: "Muhammdemin",
  age: 15,
};

user.age = 16; // buni qilib bolmaydi

// Pick - bu typedagi malumotni keraklisini tanlab oladi

type User = {
  name: string;
  age: number;
  email: string;
};

type PublicUser = Pick<User, "name" | "age">;

type PublicUser = {
  name: string;
  email: string;
};

// Omit - bu type ichidagi kerakli maluumotlarni ochirib tashlaydi

type User = {
  name: string;
  age: number;
  email: string;
};

type SafeUser = Omit<User, "email">;
