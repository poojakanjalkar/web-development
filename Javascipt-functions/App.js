//working of map function
const a = [1, 3, 4, 5];
console.log(a);
let add;

const result = a.map((elm) => elm + 1);

console.log("result is", result);

//example of filter function

const arr = [37, 22, 88, 99, 46];

const evenNumbers = arr.filter((elm) => elm % 2 == 0);
console.log("this array is even", evenNumbers);

//example 2 get all students whose grades are greater than or equal to 90.
const students = [
  { name: "Quincy", grade: 96 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 },
];

const res = students.filter((elm) => elm.grade >= 90);
console.log("students whose grades are greater than or equal to 90 is -", res);

//example of Reduce function
const number = [2, 3, 4, 5];
const addition = number.reduce((result, item) => result + item);
console.log("++++++", addition);

// example 2
const dept = ["IT", "CSE", "ME", "IT", "civil", "CSE", "IT"];

const output = dept.reduce((obj, department) => {
  if (!obj[department]) {
    obj[department] = 1;
  } else {
    obj[department]++;
  }
  return obj;
}, {});
console.log(output);

// problem 2
const name = "pavan";
const arr1 = name.split("");
console.log(arr1);

const charOccurence = arr1.reduce((obj, a) => {
  if (!obj[a]) {
    obj[a] = 1;
  } else {
    obj[a]++;
  }
  return obj;
}, {});
console.log(charOccurence);

//example of some function,

const negativeArr = [0, 1, -4, 2, -33];
const newArr = negativeArr.some((elm) => elm < 0);
console.log(newArr);
