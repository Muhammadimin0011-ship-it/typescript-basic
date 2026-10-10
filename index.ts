let a: boolean = true;
let b: number = 12;
let c: string = "muhammad";

function Salom(): void {
  console.log("abc");
}

let d: undefined = undefined;
let e: null = null;

// Interface: obyekt shaklini belgilaydi
interface User {
  name: string;
  age: number;
}

const u: User = { name: "Muhammademin", age: 15 };

// Class: obyektlar yaratish uchun shablon
class Animal {
    constructor(public nom: string) {
        ovoz() {console.log("!!!") }
    }
}

// Enum: nomlangan doimiy qiymatlar to'plami

enum Color {"blue", "red", "yellow"}

// Array: bir xil turdagi qiymatlar ro'yxati

const n: number[] = [1, 2, 3]

// Tuple: tartibi va turi qat'iy belgilangan massiv

const m: [string, number] = ["muhammademin", 123]

// Object: oddiy obyekt

const book: {title: string, price: number} = {title: "atomic habits", price: 50000}


function xatoBer(xabar: string): never {
  throw new Error(xabar);   // funksiya hech qachon tugamaydi
}