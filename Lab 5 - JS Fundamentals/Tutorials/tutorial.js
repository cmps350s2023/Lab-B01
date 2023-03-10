// node --watch tutorial.js
/*
The comments

console.log("Welcome to JS", 123);
console.log("CMPS 350");

// Three ways of declaring variables
const gender = "Male";
let name = "Abdulahi";
const age = 100;

// Please avoid using its

const status = false;

const person = {
  name: "Khaled",
  gender: "M",
  age: 23,
  hobbies: ["Movies", "Football", "BasketBall"],
  toString: function () {
    return this.name + " " + this.age + " " + this.gender;
  },
};
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
console.log(person.toString());

// Arrays

let numbers = [
  12,
  3,
  "Abdulahi",
  [12, 34, 5, 5, [8, 5, 6, 7, 7]],
  {
    name: "Ali",
  },
  function () {
    return 10;
  },
];

console.log(numbers);
console.log(numbers[5]());



const numbers = [1, 2, 6, 7, 70];
numbers.push(100);
console.log("After Pushing", numbers);

numbers.pop();
console.log("After Pop", numbers);

numbers.unshift(100);
console.log("After unshift", numbers);

numbers.shift();
console.log("After shift", numbers);

slice = numbers.slice(2, 4);
console.log("After slice", slice);
console.log("Numbers Array after Slice", numbers);

splice = numbers.splice(2, 1, "Hello", "Cool", "Coming");
console.log("After splice", splice);
console.log("Numbers Array after Slice", numbers);


function calculator(a, b, opr, display) {
  // there is alot of code that is doing something
  const result = opr(a, b);
  display(result);

  //lots of code
}

const add = function (a, b) {
  return a + b;
};
const mul = function (a, b) {
  return a * b;
};
const div = function (a, b) {
  return a / b;
};
const sub = function (a, b) {
  return a - b;
};

const display = function (v) {
  console.log(v);
};
a = 2;
b = 3;
calculator(a, b, add, function (v) {
  console.log(v);
});
calculator(2, 3, add, display);
calculator(2, 3, sub, display);
calculator(2, 3, mul, display);
calculator(2, 3, div, display);


const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(function (value) {
  console.log(value);
});

filtered = numbers.filter(function (value) {
  return value % 2 == 0;
});


const numbers = [1, 2, 3, 4, -5, 6, 4];
filtered = numbers.filter((value) => value % 2 == 0);
neg = numbers.filter((value) => value < 0);
squared = numbers.map((value) => value ** 2);
findElement = numbers.find((value) => value == 999);
findIndex = numbers.findIndex((value) => value == 4);
numbers.forEach((i) => console.log(i));
console.log(numbers);
console.log("Filter Even", filtered);
console.log("Filter Negative", neg);
numbers.map((a) => a ** 3).filter((a) => a % 2 == 1);
console.log("MAP", squared);
console.log("Find", findElement);
console.log("FindIndex", findIndex);

console.log(numbers);
numbers.splice(
  numbers.findIndex((value) => value == 4),
  1
);
*/

// const numbers = [1, 2, 3, 4, -5, 6, 4];

// console.log(numbers);

// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// const mult = numbers.reduce((acc, curr) => acc * curr, 1);

// function reducer(acc, curr) {
//   return [...acc , curr];
// }
// numbers = [1,2,3,4,5]

// function myReduce(numbers, reducer, init) {
//   let acc = init;

//   for (const curr in numbers) {
//     acc = reducer(acc, curr);
//   }

//   return acc;
// }

// add1 = myReduce([1, 2, 3, 4], (a, b) => a + b, 0);
// mul1 = myReduce([1, 2, 3, 4], (a, b) => a * b, 1);
// post = myReduce([1, 2, -3, 4], (a, b) => a.push(b), []);

// console.log();

const numbers = [1, 2, 3, 4, -5, 6, 4];

const num = numbers.reduce((a, b) => a + b, 0);
const num2 = numbers.reduce((a, b) => a * b, 1);

console.log(num, num2);
