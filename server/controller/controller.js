let Userdb= require("../model/model");

exports.create=(req, res)=>{ 
    // validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be emtpy!"});
        return;
    }

    // new user
    const user=new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender: req.body.gender,
        status:req.body.status
    })
    // save user in the database
    user
    .save(user)
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
        message: err.message || "Some error occurred while creatingacreate operation"
        });
    }); 
                             
}
      

// retrieve and return all users/retrive and returnasingle user
exports.find=(req, res)=>{ 
    Userdb.find()
    .then(user =>{
     res.send(user)
    })
    .catch(err =>{
     res.status(500).send({ message:err.message || "Error Occurred while retriving user information"})
    })
}

//Updateanew idetified user by user id

exports.update=(req, res)=>{ 
    
}

// Deleteauser with specified user id in the request
exports.delete=(req, res)=>{ 
    
}