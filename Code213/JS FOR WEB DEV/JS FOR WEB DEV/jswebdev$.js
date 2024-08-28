//Write a function that takes an array of numbers and returns the average of all the even numbers. Use the filter() and reduce() array methods in your implementation.
const paire = (n) => {
  let caca = n.filter((temp) => temp % 2 === 0);
  let coco = caca.reduce((number, numbers) => number + numbers, 0);
  let average = coco / caca.length;
  return average;
};
console.log(
  paire([14, 10, 3, 6, 8, 12, 10, 5, 17, 0, 0, 4, 5, 4, 9, 14, 10, 9, 9, 1, 14])
);
//Write a function that takes an array of words and returns the longest word. Use the reduce() array method in your implementation.
const longestword = (gogo) => {
  let fifi = gogo.reduce(
    (longest, traitement) =>
      traitement.length > longest.length ? traitement : longest,
    ""
  );
  return fifi;
};
console.log(
  longestword([
    "chat",
    "éléphant",
    "voiture",
    "avion",
    "supercalifragilisticexpialidocious",
  ])
);
//Write a function that takes an array of objects representing books, with each object containing properties such as title, author, and pages. The function should return the average number of pages across all the books. Use the map() and reduce() array methods in your implementation.
const books = (book) => {
  let koko = book.map((temp) => temp.pages);
  let bobo = koko.reduce((goki, goko) => goki + goko, 0);
  let fofo = bobo / koko.length;
  return fofo;
};
console.log(
  books([
    { title: "Book 1", author: "Author 1", pages: 150 },
    { title: "Book 2", author: "Author 2", pages: 200 },
    { title: "Book 3", author: "Author 3", pages: 300 },
  ])
);
//Write a function that takes an array of strings and returns an object containing the frequency of each string. For example, if the input is ["hello", "world", "hello"], the output should be { hello: 2, world: 1 }. Use the reduce() array method in your implementation.
const frequencyofeachstring = (essaye) => {
  let result = essaye.reduce((gauche, droit) => {
    gauche[droit] = (gauche[droit] || 0) + 1;
    return gauche;
  }, {});
  return result;
};
console.log(frequencyofeachstring(["bonjour", "monde", "bonjour"]));
//Write a function that takes an array of objects representing people, with each object containing properties such as name, age, and city. The function should return an object containing the count of people by city. For example, if the input is [{ name: "Alice", age: 30, city: "New York" }, { name: "Bob", age: 40, city: "Chicago" }, { name: "Charlie", age: 50, city: "New York" }], the output should be { "New York": 2, "Chicago": 1 }. Use the reduce() array method in your implementatio
const thecountofpeople = (lolo) => {
  let people = lolo.map((kiki) => kiki.city);
  const nono = people.reduce((jojo, jiji) => {
    jojo[jiji] = (jojo[jiji] || 0) + 1;
    return jojo;
  }, {});
  return nono;
};
console.log(
  thecountofpeople([
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" },
  ])
);
