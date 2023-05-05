const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());  // added middleware for post data (req.body)

/*app.get('/',(req,res)=>{
  //res.status(200).send('Hello from the server');
    res.status(200).json({message:'Hello from the server', app:'natours'});
});

app.post('/',(req,res)=>{
   res.status(200).send('You can post at this endpoint...');
})*/

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.get('/api/v1/tours',(req,res)=>{
   res.status(200).json({
     status:'success',
     results:tours.length,
     data:{
       tours:tours
     }
   })
});

app.get('/api/v1/tours/:id',(req,res)=>{    // to send multiple parameters :- '/api/v1/tours/:id/:x/:y?'
  //console.log(req.params);

   const id = req.params.id * 1 ; // convert string value to number
   const tour = tours.find(el => el.id === id); // find match values from array and returns new array of all matched values
  
    if(!tour){
      return res.status(404).json({
       status:'fail',
       message:"Invalid Id"
      });
    }

    res.status(200).json({
      status:'success',
      data:{
        tour:tour
      }
    })
});

app.post('/api/v1/tours',(req,res)=>{
    //console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id:newId},req.body);  // merge two objects into a single object

    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err =>{
        res.status(201).json({
          status:'success',
          data:{
            tour:newTour
          }
        })
    });
});

app.patch('/api/v1/tours/:id',(req,res)=>{
  if(req.params.id * 1 > tours.length){
     return res.status(404).json({
       status:'fail',
       message:'Invalid Id'
     });
  }

  res.status(200).json({
    status:'success',
    data:{
      tour:`<Updated tour number:- ${req.params.id}>`
    }
  })

});

app.delete('/api/v1/tours/:id',(req,res)=>{
  if(req.params.id * 1 > tours.length){
     return res.status(404).json({
       status:'fail',
       message:'Invalid Id'
     });
  }

  res.status(204).json({
    status:'success',
    data:null
  });

})

const port = 3000;
app.listen(port,()=>{
    console.log(`App is running on ${port} port`);
})