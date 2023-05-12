const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'}); // setup config file

const app = require('./app');
//console.log(app.get('env'));  // returns type of the environment for express
 //console.log(process.env); // returns type of the environment for node
 // to set env variable from the terminal type:- NODE_ENV=development nodemon server.js


const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
 //mongoose.connect(process.env.DATABASE_LOCAL,{    // to connect with local database , please run mongo db services
 mongoose.connect(DB,{   // connect with hosted database
   useNewUrlParser:true,
   useCreateIndex:true,
   useFindAndModify:false
 }).then(con =>{
    console.log('Database connected succesfully!');
 })
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`App is running on ${port} port`);
});