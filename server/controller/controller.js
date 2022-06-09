const { resolveInclude } = require("ejs");
let Userdb= require("../model/model");

exports.create=(req, res)=>{ 
    // validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be emtpy!"});
        return;
    }

    // new user
    // const user=new Userdb({
    //     name:req.body.name,
    //     email:req.body.email,
    //     gender: req.body.gender,
    //     status:req.body.status
    // })
    // // save user in the database
    // user
    // .save(user)
    // .then(data =>{
    //     // res.send(data)
    //     res.redirect('/')
    // })
    // .catch(err =>{
    //     res.status(500).send({
    //     message: err.message || "Some error occurred while creatingacreate operation"
    //     });
    // }); 
      let newUser=new Userdb(req.body)
    try{
        newUser.save()  
        res.redirect('/')
    }catch{
        res.status(500).send('Error')
    }                         
}
      

// retrieve and return all users/retrive and returnasingle user
exports.find=(req, res)=>{ 


    if(req.query.id){
     let id=req.query.id;
        Userdb.findById(id)
        .then(data =>{
            
            if(!data){
            res.status(404).send({ message:"Not found user with id "+ id})
            }else{
            res.send(data)
            }
        })   
        .catch(err =>{
            res.status(500).send({ message: "Erro retrieving user with id"+ id})
        })


    }else{
        Userdb.find()
        .then(user =>{
        res.send(user)
        })
        .catch(err =>{
        res.status(500).send({ message:err.message || "Error Occurred while retriving user information"})
        })
    }
    
}

//Updateanew idetified user by user id

exports.update=(req, res)=>{ 
    if(!req.body){
        return res
          .status(400)
          .send({ message: "Data to update can not be empty"})
    }
    const id=req.params.id;
    Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(404).send({ message: 'Cannot Update user with $(id). Maybe user not found!'})
        }else{
            res.redirect('/')
        }
    }).catch(err=>{
       res.status(500).send({ message: "Error Update user information"})
    })
    



}

// Deleteauser with specified user id in the request
exports.delete=(req, res)=>{
    let id=req.params.id; 
    Userdb.findByIdAndDelete(id)
    .then(data =>{
    if(!data){
      res.status(404).send({ message: "Cannot Delete with id $(id). Maybe id is wrong"})
    }else{
      res.redirect('/')
    }
    })
    .catch(err =>{
        res.status(500).send({
        message: "Could not delete User with id="+id
        });
    })    
}

exports.alluser=(req,res)=>{
    Userdb.find()
    .then(user =>{
       resolve(user) 
    
    })
    .catch(err =>{
    res.status(500).send({ message:err.message || "Error Occurred while retriving user information"})
    })
}

exports.getAll=()=>{
    return new Promise(async(resolve,reject)=>{
        let alluser=await Userdb.find()
        resolve(alluser)
        // console.log('Promise');
    })
}