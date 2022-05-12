const arr = {
  firstname: 'Abhisek',
  lastname: 'Nanda',
  age: '22',
  intrest: 'girls',
};

const datajson = JSON.stringify(arr);
console.log(datajson);

const objdata = JSON.parse(datajson);
console.log(objdata);
console.log(objdata.firstname);
console.log(objdata.lastname);
console.log(objdata.age);
console.log(objdata.intrest);
