const http = require('http');
const arr = {
  firstname: 'Abhisek',
  lastname: 'Nanda',
  age: '22',
  intrest: 'girls',
};
const server = http.createServer((res, req) => {
  res.end('hello');
});
const datajson = JSON.stringify(arr);
console.log(datajson);

const objdata = JSON.parse(datajson);
console.log(objdata);
console.log(objdata.firstname);
console.log(objdata.lastname);
console.log(objdata.age);
console.log(objdata.intrest);

server.listen(8000);
