const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female"
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male"
  }
];

//REDUCE

//Get the total mass of all characters
const totalMass = characters.reduce(
  (previous, character) => previous + +character.mass,
  0
);
console.log(totalMass);

//Get the total height of all characters
const totalHeight = characters.reduce(
  (previous, character) => previous + +character.height,
  0
);
console.log(totalHeight);

//Get the total number of characters in all the character names
const totalNumberOfCharctersInName = characters.reduce(
  (p, c) => p + +c.name.length,
  0
);
console.log(totalNumberOfCharctersInName);

//Get the total number of characters by eye color (hint. a map of eye color to count)
var charactersEyeColors = characters.reduce((prev, character) => {
  character.eye_color in prev
    ? (prev[character.eye_color] += 1)
    : (prev[character.eye_color] = 1);
  return prev;
}, {});
console.log(charactersEyeColors);

//Get the total number of characters by gender (hint. a map of gender to count)
const genderCount = characters.reduce((p, c) => {
  c.gender in p ? (p[c.gender] += 1) : (p[c.gender] = 1);
  return p;
}, {});
console.log(genderCount);

//Get the highest mass and height among all of them
const heighestMass = characters.reduce((p, c) => {
  return +c.mass > p ? +c.mass : p;
}, 0);
console.log(heighestMass);

//Create initails array for Names
const initialsArray = characters.reduce((p, c, i, a) => {
  p[i] = a[i].name.split(" ")[0][0] + a[i].name.split(" ")[1][0];
  return p;
}, []);
console.log(initialsArray);

//
const output = characters.reduce((p, c, i, a) => {
  const split = c.name.split(" ");
  let part = `${split[0][0]}${split[1][0]}`;

  if (i === a.length - 1) {
    part += ".";
  } else {
    part += ", ";
  }
  return p + part;
}, "");
console.log(output);
