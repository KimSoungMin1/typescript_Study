"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone); //boolean
let isOk = true;
let myName = "김성민";
myName = "rla";
let fullName = "mark";
let age = 27;
let sentence = `Hellow my name is ${fullName} I'll be ${age + 1} years old next month`;
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
let v = undefined; //void = null을 할당 할수 없고 undefined 할당ㅇ 가능함
let union = null; //유니온 타입 작성법
union = "홍길동 입닏자";
