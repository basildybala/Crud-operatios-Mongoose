const axios=require('axios');
let controller=require("../controller/controller")

//Get Api Promise Database

// exports.homeRoutes =async (req, res) => {
//  controller.getAll(req,res).then((users)=>{
//   res.render('index', {users })
//  })
  
// };

exports.homeRoutes = (req, res) => {
  // Makeaget request to /api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
      
      res.render('index', {users: response.data })
    }) 
    .catch(err =>{
      res.send(err);
    })  
};

exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
 
  axios.get('http://localhost:3000/api/users',{params:{ id:req.query.id }})
  .then(function(userdata){
    res.render("update_user", {user:userdata.data})
  })
  
};
