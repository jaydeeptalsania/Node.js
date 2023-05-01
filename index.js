const fs = require('fs');
const superagent = require('superagent'); 

/*fs.readFile(`${__dirname}/dog.txt`,'utf-8',(err,data)=>{
    //console.log(data);
    if(err) return console.log(err.message);
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res)=>{
       console.log(res.body);

       fs.writeFile(`dog-img.txt`,res.body.message,err=>{
             console.log('dog image saved!');
       });
    });
});*/

/* fs.readFile(`${__dirname}/dog.txt` , 'utf-8',(err,data)=>{
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res=>{
        console.log(res.body);
        fs.writeFile(`dog-img.txt`,res.body.message,err =>{
              console.log('dog image saved!');
        });
    }).catch(err=>{
        console.log(err.message);
    })
 }); */

  const readFilePromise = (file)=>{
    return new Promise((resolve,reject)=>{
      fs.readFile(file,'utf-8',(err,data)=>{
        if(err) reject('Could not found file');
        resolve(data);
      })
    })
  }

  const writeFilePromise = (file , data)=>{
   return new Promise((resolve,reject)=>{
     fs.writeFile(file,data,err=>{
       if (err) reject('Could not found file');
       resolve('Write successful');
     });
   });
 }

  readFilePromise(`${__dirname}/dog.txt`).then((data)=>{
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
  })
  .then(res=>{
        return writeFilePromise(`dog-img.txt`,res.body.message);
  })
  .then(()=>{
     console.log('random dog image saved');
  })
  .catch(err=>{
        console.log(err.message);
  })
