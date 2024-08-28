console.log("hello world");
//Challenge number one : 20/20 Picarats
let message = "There is no war in Ba Sing Se";
function challengeone() {
  const look = message.trim().split(" ");
  return look.length;
}
const counter = challengeone();
console.log(`the message contains ${counter} words`);

//Challenge number two : 25/25 Picarats
let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];
function Miyazaki() {
  let array = [];
  for (let i = 0; i <= countries.length - 1; i++) {
    array.push(
      `your country: ${countries[i]} and his capital is: ${capital[i]}`
    );
  }
  return array;
}
Miyazaki().forEach((message) => console.log(message));
//const messages = Miyazaki();
//const upperCaseMessages = messages.map(message => message.toUpperCase());
//upperCaseMessages.forEach((message)=> console.log(message))

//Challenge number three : 35/35 Picarats
function randomizer() {
  let randomizers = Math.floor(Math.random() * 4);

  if (randomizers === 0) {
    return "A certain victory";
  } else if (randomizers === 1) {
    return "not so certain victory";
  } else if (randomizers === 2) {
    return "not so certain victory";
  } else {
    return "Your fate is unclear, ô chosen undead";
  }
}
const random = randomizer();
console.log(`your fate ${random}`);

//Challenge number four : 45/45 Picarats
let months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];
function checkSeason(months) {
  for (let i = 0; i <= months.length - 1; i++) {
    if (months === "janvier" || months === "février" || months === "décembre") {
      return "winter";
    } else if (months === "juin" || months === "juillet" || months === "août") {
      return "summer";
    } else if (months === "mars" || months === "avril" || months === "mai") {
      return "printemps";
    } else {
      return "automn";
    }
  }
}

console.log(checkSeason("mars"));
