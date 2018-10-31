'use strict';

// Make student report fn:
function makeStudentsReport(data){
  const studentArray=[];

  for(let i=0; i< data.length; i++){
    const item = data[i];
    studentArray.push(`${item.name}: ${item.grade}`);
  }

  return studentArray;
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

console.log(makeStudentsReport(testData));