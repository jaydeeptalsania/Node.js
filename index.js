const fs = require('fs');

const fileData = fs.readFileSync('./starter/txt/input.txt','utf-8');
console.log(fileData);

const writeData = `Hello I am writing into this file on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt' , writeData);
console.log('File has been created');
