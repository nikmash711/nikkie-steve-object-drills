'use strict';

function decode(word){
  
  const key = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
   
  let firstLetter = word[0];
  if(firstLetter in key) // if the first letter can be found in our key, we want the character at the index indicated in the key
  {
    return word[key[firstLetter]];
  } 
  else {
    return ' ';
  }
}

function decodeSentence(sentence){
  let wordsArray = sentence.split(' ');

  const decodedArray = wordsArray.map(word => {
    return decode(word);
  });

  return decodedArray.join('');

}

console.log(decodeSentence('craft block argon meter bells brown croon droop'));