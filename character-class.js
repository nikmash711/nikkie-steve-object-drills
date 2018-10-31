'use strict';
// const loaf = {
//   flour: 30,
//   water: 210,
//   hydration: function() {
//     return (loaf.water / loaf.flour) * 100
//   }
// }

// console.log(loaf.flour)
// console.log(loaf.water)
// console.log(loaf.hydration())

// const obj = { foo: 1, bar: 2, fum: 3, quux: 4, spam: 5 }

// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     const element = obj[key]
//     console.log(`${key} ${element}`)
//   }
// }

// const hobbit = {
//   meals: [
//     'breakfast',
//     'second breakfast',
//     'elevenses',
//     'lunch',
//     'afternoon tea',
//     'dinner',
//     'supper'
//   ]
// }
// console.log(hobbit.meals[3])

// obj1 = { name: 'steve', jobTitle: 'software enigeer', boss: 'james' }
// obj2 = { name: 'fred', jobTitle: 'developer', boss: 'james' }
// obj3 = { name: 'james', jobTitle: 'programmer' }

// array = [obj1, obj2, obj3]

// array.forEach(element => {
//   if (!element.hasOwnProperty('boss')) {
//     console.log(
//       `${element.jobTitle} ${element.name} doesn't report to anybody.`
//     )
//   } else {
//     console.log(
//       `${element.jobTitle} ${element.name} reports to ${element.boss}.`
//     )
//   }
// })

function Character(name, nickname, race, origin, attack, defense) {
  this.name = name;
  this.nickname = nickname;
  this.race = race;
  this.origin = origin;
  this.attack = attack;
  this.defense = defense;
}

Character.prototype.evaluate = function(oppenent){
  let health = oppenent.defense - this.attack;
  let health2 = this.defense - oppenent.attack;
  return `${oppenent.name} takes ${this.attack } damage, his health is ${health < 0 ? 0 : health} and you receive ${ oppenent.attack } damage and your health is ${health2 < 0 ? 0 : health2}`;
};

Character.prototype.describe = function() {
  return `${this.name} is a ${this.race} from ${this.origin}.`;
};


const gandalf = new Character(
  'Gandalf the White',
  'gandalf',
  'Wizard',
  'Middle Earth',
  10,
  6
);

const bilbo = new Character(
  'Bilbo Baggins',
  'bilbo',
  'Hobbit',
  'The Shire',
  2,
  1
);
const aragorn = new Character(
  'Aragorn son of Arathorn',
  'Aragon',
  'Man',
  'Dunnedain',
  6,
  8
);
const frodo = new Character(
  'Frodo Baggins',
  'Frodo',
  'Hobbit',
  'The Shire',
  3,
  2
);

const legolas = new Character(
  'Legolas',
  'legolas',
  'Efl',
  'Woodland Realm',
  8,
  5
);

console.log(gandalf.describe());
console.log(legolas.describe());
console.log(bilbo.evaluate(frodo));