const fs = require('fs');
const http = require('http');

/*const fileData = fs.readFileSync('./starter/txt/input.txt','utf-8');
console.log(fileData);

const writeData = `Hello I am writing into this file on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt' , writeData);
console.log('File has been created'); */

/* fs.readFile('./starter/txt/start.txt','utf-8',(err,data1)=>{
    if (err) return console.log("file not found");
   fs.readFile(`./starter/txt/${data1}.txt`,'utf-8',(err,data2)=>{
      console.log(data2);
      fs.readFile('./starter/txt/append.txt','utf-8',(err , data3)=>{
         console.log(data3);
         fs.writeFile('./starter/txt/final.txt',`${data2}/n${data3}`,'utf-8',err=>{
            console.log('Your file has been written');
         })
      });
   });
});
console.log("Reading file..."); */

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);  // convert json into javascript object


const server = http.createServer((req,res)=>{
   const pathName = req.url;

   if(pathName === '/product'){
      res.end('Product page');
   }else if(pathName === '/cart'){
      res.end('Cart page');
   }else if(pathName === '/'){
      res.end('Home Page')
   }else if(pathName === '/api'){
     res.writeHead(200,{"Content-type":"application/json"});
     res.end(data);      
   }else{
      res.writeHead('404',{
         "Content-type":"text/html",
         "my-own-header":"hello-world"
      });
      res.end('<h1>page not found!</h1>');
   }
});

server.listen('3000');