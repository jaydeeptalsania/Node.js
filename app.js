const fs = require('fs');
const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// =========== Middelwares ============================

app.use(express.json());  // added middleware for post data (req.body)
app.use(express.static(`${__dirname}/public`)); // server static files , in URL type localhost:3000/overview.html or localhost:3000/img/pin.png

//console.log("hello",process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
 app.use(morgan('dev'));  // give info about api's in console. like method , url , status code ...etc
}

app.use((req,res,next)=>{   // middleware-1
  console.log("Hello from custom middleware 👏");
  next();                
});

app.use((req,res,next)=>{  // middleware-2
   req.requestTime = new Date().toISOString();    // modifying req object in middleware
   next();
});

// =========== Routes ============================

app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);

module.exports = app;

