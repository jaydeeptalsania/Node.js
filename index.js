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

 fs.readFile(`${__dirname}/dog.txt` , 'utf-8',(err,data)=>{
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res=>{
        console.log(res.body);
        fs.writeFile(`dog-img.txt`,res.body.message,err =>{
              console.log('dog image saved!');
        });
    }).catch(err=>{
        console.log(err.message);
    })
 });