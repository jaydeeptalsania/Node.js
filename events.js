const EventEmitter = require('events');
const http = require('http');


class Sale extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmitter = new Sale();

myEmitter.on('newSale',()=>{
  console.log('There was a new sale');
});

myEmitter.on('newSale',()=>{
    console.log('Cuatomer name: Jaydeep');
});

myEmitter.on('newSale', stock =>{
    console.log(`There are ${stock} items in stock`);
});

myEmitter.emit('newSale' , 12);

//======================= server events ====================================

const server = http.createServer();

server.on('request',(req,res)=>{
   console.log('request received');
   res.end('Recived request');
});

server.on('request',(req,res)=>{
    console.log('Another request received');
});

server.on('close',(req,res)=>{
  console.log('Server closed');
});

server.listen(3000,()=>{
    console.log('Waiting for requests...');
})