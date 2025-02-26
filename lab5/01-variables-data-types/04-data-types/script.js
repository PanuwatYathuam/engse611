/*
let a=1;
let b=2.3

console.log(a);
console.log(b);
b=8;
console.log(b);
b='Test';
console.log(b);

*/
// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;
console.log(hasKids);

// Null
const aptNumber = null;
console.log(aptNumber);

// Undefined
// let score;
let scoreA;
const score = undefined;
console.log(scoreA);
console.log(score);

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3

let num1 = 1.2;
let str = '514' ;
console.log(num1, typeof num1);
console.log(str, typeof str);

console.log(parseInt(str), typeof parseInt(str));
console.log(num1.toString(),typeof num1.toString());

const numbers2 = Array();
numbers2[0] = 20;
numbers2[1] = 30;
numbers2[2] = 40;
numbers2[3] = 50;
numbers2[4] = 60;
console.log(numbers2);

let amount = 'hello';

// Convert string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// Convert number to string
amount = amount.toString();
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);