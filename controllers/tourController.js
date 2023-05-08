const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

  exports.getTours = (req,res)=>{
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
  
  exports.getTour = (req,res)=>{    // to send multiple parameters :- '/api/v1/tours/:id/:x/:y?'
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
  
  exports.createTour = (req,res)=>{
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
  
  exports.updateTour = (req,res)=>{
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
  
  exports.deleteTour = (req,res)=>{
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