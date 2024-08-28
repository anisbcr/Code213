console.log("hello world");
//Write a function that takes an array of numbers and returns a new array containing only the even num
function getEvenNumbers(arr) {
  let evenNumbers = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//Create an object representing a person with properties such as name, age, and email. Write a function that takes an array of these objects and returns a new array containing only the people who are over 30 years old.
// Step 1: Define the Person Objects

let person1 = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

let person2 = {
  name: "Bob",
  age: 35,
  email: "bob@example.com",
};

let person3 = {
  name: "Charlie",
  age: 32,
  email: "charlie@example.com",
};

let person4 = {
  name: "David",
  age: 28,
  email: "david@example.com",
};

// Step 2: Write the Filter Function
let people = [person1, person2, person3, person4];
function filterPeopleOver30(people) {
  let peopleOver30 = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age > 30) {
      peopleOver30.push(people[i]);
    }
  }
  return peopleOver30;
}

console.log(filterPeopleOver30(people));
//Implement a stack data structure in JavaScript using an array.
let items = [];
items.push("one");
items.push("two");
items.push("three");
items.pop();
console.log(items);

function peek(items) {
  let postionlastelement = items.length - 1;
  return items[postionlastelement];
}
console.log(peek(items));

function isEmpty(items) {
  if (items.length === 0) {
    return "false";
  } else {
    return "true";
  }
}

console.log(isEmpty(items));
function size(items) {
  return items.length;
}
console.log(size(items));
//
//Implementation of a queue in javascript.
let queue = [];
//Add 4 elements to the queue.
queue.push("Mark");
queue.push("Patrick");
queue.push("Eric");
queue.push("Rafael");

//Remove the elements from the queue:
let firstOut = queue.shift();
console.log(queue);

function front(queue) {
  let thisis = queue.length - 1;
  return queue[thisis];
}
console.log(front(queue));

function isEmpty(queue) {
  if (queue.length === 0) {
    return "false";
  } else {
    return "true";
  }
}
console.log(isEmpty(queue));
//Write a function that takes a string as input and returns a new string with all the vowels removed.
function vowels(dbr) {
  let caca = "";
  const vowels = "a,e,i,o,u,A,E,I,O,U ";
  for (let char of dbr) {
    if (!vowels.includes(char)) {
      caca += char;
    }
  }
  return caca;
}
console.log(vowels("Hello, World!"));
//Given two arrays of numbers, write a function that returns a new array containing the unique elements from both arrays.
function uniqueElements(array1, array2) {
  let combinedarray = [...array1, ...array2];
  let tofilter = combinedarray.filter(
    (item, index) => combinedarray.indexOf(item) === index
  );
  return tofilter;  
}
console.log(uniqueElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
