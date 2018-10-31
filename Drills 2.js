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

function createCharacter(name, nickname, race, origin, attack, defense) {
  const character = {}
  character.name = name
  character.nickname = nickname
  character.race = race
  character.origin = origin
  character.attack = attack
  character.defense = defense
  character.describe = function() {
    return `${character.name} is a ${character.race} from ${character.origin}.`
  }
  character.evaluateFight = function(characterObj) {
    let health = characterObj.defense - character.attack
    let health2 = characterObj.defense - characterObj.attack
    return `${characterObj.name} takes ${
      character.attack
    } damage, his health is ${health < 0 ? 0 : health} and you receive ${
      characterObj.attack
    } damage and your health is ${health2 < 0 ? 0 : health2}`
  }

  return character
}

let characterArray = []

const gandalf = createCharacter(
  'Gandalf the White',
  'gandalf',
  'Wizard',
  'Middle Earth',
  10,
  6
)

const bilbo = createCharacter(
  'Bilbo Baggins',
  'bilbo',
  'Hobbit',
  'The Shire',
  2,
  1
)

const aragorn = createCharacter(
  'Aragorn son of Arathorn',
  'Aragon',
  'Man',
  'Dunnedain',
  6,
  8
)
const frodo = createCharacter(
  'Frodo Baggins',
  'Frodo',
  'Hobbit',
  'The Shire',
  3,
  2
)

const legolas = createCharacter(
  'Legolas',
  'legolas',
  'Efl',
  'Woodland Realm',
  8,
  5
)

const Arwen = createCharacter(
  'Arwen Undomiel',
  'arwen',
  'Half-Elf',
  'Rivendell',
  5,
  10
)
characterArray.push(legolas, gandalf, bilbo, frodo, aragorn, Arwen)

console.log(gandalf.evaluateFight(bilbo))

// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------
