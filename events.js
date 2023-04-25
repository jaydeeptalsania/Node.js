const EventEmitter = require('events');


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