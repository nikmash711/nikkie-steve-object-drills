'use strict';
//using function constructors: 
function Character(name, nickname, race, origin, attack, defense) {
  this.name = name;
  this.nickname = nickname;
  this.race = race;
  this.origin = origin;
  this.attack = attack;
  this.defense = defense;
}

Character.prototype.evaluateFight = function(oppenent){
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
const aragon = new Character(
  'Aragon son of Arathorn',
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

const Arwen = new Character(
  'Arwen Undomiel',
  'arwen',
  'Half-Elf',
  'Rivendell',
  5,
  10
);

let characterArray = [];
characterArray.push(legolas, gandalf, bilbo, frodo, aragon, Arwen);

console.log(gandalf.evaluateFight(Arwen));

const aragonObj = characterArray.find(function(element) {
  return element.nickname === 'Aragon';
});
console.log(aragonObj.describe());

let hobbits = characterArray.filter(function(element) {
  return element.race === 'Hobbit';
});
console.log(hobbits);

let charactersAboveFive = characterArray.filter(function(element) {
  return element.attack > 5;
});
console.log(charactersAboveFive);


console.log(gandalf.describe());
console.log(legolas.describe());
console.log(bilbo.evaluateFight(frodo));