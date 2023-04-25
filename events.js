const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('newSale',()=>{
  console.log('There was a new sale');
});

myEmitter.on('newSale',()=>{
    console.log('Cuatomer name: Jaydeep');
});

myEmitter.on('newSale', stock =>{
    console.log(`There are ${stock} items in stock`);
});

myEmitter.emit('newSale' , 10);