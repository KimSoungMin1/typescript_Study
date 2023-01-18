let isDone: boolean = false;

isDone = true;
console.log(typeof isDone); //boolean

let isOk: Boolean = true;

let myName: string = "김성민";
myName = "rla";

let fullName: string = "mark";
let age: number = 27;
let sentence: string = `Hellow my name is ${fullName} I'll be ${
  age + 1
} years old next month`;

console.log(sentence); //boolean
let ggy = 123;

console.log(Symbol("foo") === Symbol("foo")); //false

const sym = Symbol();

const obj = {
  [sym]: "value",
};
obj[sym];

//let MyName: string = undefined; //null/undefined는 할당  못함 유니온 타입으로 작성하면 가능
//let u: undefined = null;
let v: void = undefined; //void = null을 할당 할수 없고 undefined 할당ㅇ 가능함

let union: string | null = null; //유니온 타입 작성법
union = "홍길동 입닏자";

const person1 = { name: "Mark", age: 39 };
//person1 is not "object" type
// person1 is {name: string, age: number}

const person2 = Object.create({ name: "Mark", age: 39 });
