const dotenv = require('dotenv');
dotenv.config({path:'./config.env'}); // setup config file

const app = require('./app');
//console.log(app.get('env'));  // returns type of the environment for express
 //console.log(process.env); // returns type of the environment for node
 // to set env variable from the terminal type:- NODE_ENV=development nodemon server.js
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`App is running on ${port} port`);
});