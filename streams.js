const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
   // solution-1 , it will send data after whole file read finished 

  /* fs.readFile('test-file.txt','utf-8',(err,data)=>{
       if (err) console.log(err);
       res.end(data);
   }); */

   // solution-2:Streams , read file in chunks , but the problem is back pressure where speed of req data and res data is not matched

  /* const readable = fs.createReadStream('test-file.txt');
   readable.on('data',(chunk)=>{
      res.write(chunk);
   });

   readable.on('end',()=>{
      res.end();
   });

   readable.on('error',(err)=>{
       res.statusCode = '500',
       res.end('file not found');
   });*/

   // solution -3 , pipe event , it will fix the backpresure issue

   const readable = fs.createReadStream('test-file.txt');
   readable.pipe(res);

});

server.listen(3000,()=>{
 console.log('Listning...');
});