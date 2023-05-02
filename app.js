const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  //res.status(200).send('Hello from the server');
    res.status(200).json({message:'Hello from the server', app:'natours'});
});

app.post('/',(req,res)=>{
   res.status(200).send('You can post at this endpoint...');
})

const port = 3000;
app.listen(port,()=>{
    console.log(`App is running on ${port} port`);
})