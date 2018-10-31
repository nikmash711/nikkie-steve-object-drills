'use strict';
//number one:
// function createMyObject (){
//   const myObj = {};
//   myObj['foo'] = 'bar';
//   myObj['answerToUniverse'] = 42;
//   myObj['olly olly'] = 'oxen free';
//   myObj['sayHello'] = function(){return 'hello';};

//   return myObj;
// }

// console.log(createMyObject());

//better way to write the above:
// function createMyObject() {
//   return {
//     foo: 'bar',
//     answerToUniverse: 42,
//     'olly olly': 'oxen free',
//     sayHello: function() {
//       return 'hello';
//     },
//   };
// }

//number 2:
// function updateObject(obj){
//   Object.assign(obj, {foo: 'foo', bar: 'bar', bizz: 'bizz',bang: 'bang'});
//   return obj;
//   //using assign will actually change the object 
// }

// const randomObj = {one: '1'};
// updateObject(randomObj);
// console.log(randomObj);

