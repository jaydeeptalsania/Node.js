const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());  // added middleware for post data (req.body)
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.use((req,res,next)=>{   // middleware-1
  console.log("Hello from custom middleware 👏");
  next();                
});

app.use((req,res,next)=>{  // middleware-2
   req.requestTime = new Date().toISOString();    // modifying req object in middleware
   next();
});

const getTours = (req,res)=>{
  console.log(req.requestTime);      // using modified req object from middleware
   res.status(200).json({
     fetchAt:req.requestTime,
     status:'success',
     results:tours.length,
     data:{
       tours:tours
     }
   })
}

const getTour = (req,res)=>{    // to send multiple parameters :- '/api/v1/tours/:id/:x/:y?'
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
}

const createTour = (req,res)=>{
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
}

const updateTour = (req,res)=>{
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

}

const deleteTour = (req,res)=>{
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

}

// app.get('/api/v1/tours', getTours);
// app.get('/api/v1/tours/:id',getTour);
// app.post('/api/v1/tours',createTour);
// app.patch('/api/v1/tours/:id',updateTour);
// app.delete('/api/v1/tours/:id',deleteTour);

app.route('/api/v1/tours').get(getTours).post(createTour);
app.route('/api/v1/tours/:id').patch(updateTour).delete(deleteTour).get(getTour);

const port = 3000;
app.listen(port,()=>{
    console.log(`App is running on ${port} port`);
})