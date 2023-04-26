//console.log(arguments);
//console.log(require('module').wrapper); // output :- (function (exports, require, module, __filename, __dirname) {});


//==============  module.exports ==============================
const C = require('./test-module-1');
const calc = new C;
console.log(calc.add(2,10) , calc.multiply(3,5) , calc.divide(10,2));

//================ exports =====================================
const {add , sub} = require('./test-module-2');
console.log(add(33,22), sub(45,12));

//=============== caching =====================================
 require('./test-module-3')();
 require('./test-module-3')();
 require('./test-module-3')();

