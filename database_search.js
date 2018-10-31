'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  let match =false;
  let matchObj = {};

  for(let i =0; i < arr.length; i++){
    for (const key in query){
      if (arr[i][key]===query[key]){
        match = true;
        matchObj = arr[i];
      }
      else{
        match = false;
        break;
      }
    }
  }

//   if (match===true)
//     return matchObj;
//   else
//     return null;
}

console.log(findOne(HEROES, { id: 1 }));
// => { id: 1, name: 'Captain America', squad: 'Avengers' }

console.log(findOne(HEROES, { id: 10 }));
// => null

console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
// => null

findOne(HEROES, { id: 5, squad: 'Justice League' });
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

findOne(HEROES, { squad: 'Justice League' });
// => { id: 4, name: 'Superman', squad: 'Justice League' }