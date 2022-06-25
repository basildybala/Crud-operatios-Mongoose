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
    // axios.get('http://localhost:3000/api/users')
    // .then(function(response){
      
    //   res.render('index', {users: response.data })
    // }) 
    // .catch(err =>{
    //   res.send(err);
    // })  
    let arr=[1,2,3,4,5,6]
  
    console.log('started');

    const myFunc=(value)=>{
       return new Promise(async(resolve,reject)=>{
          setTimeout(()=>{
            resolve (console.log(value))
          },2000)
        })
    }
    const myFunction=(value)=>{
       return new Promise(async(resolve,reject)=>{
          setTimeout(()=>{
            resolve (console.log(value))
          },2000)
        })
    }
    // let promise= myFunc()

    myFunc(12).then((a)=>{
      console.log(a);  
    })

    // arr.forEach((value)=>{
    //   console.log(value);
    // })
    // for(let i=0; i<10; i++){
    //   // function ab(cb){
    //   //   cb(console.log("hai"))
    //   // }
      
    //  console.log(i);
    // }
    // ab((cb=>{
    //   console.log(cb);
    // }))
   console.log('end');

   
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
