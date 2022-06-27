
// const express = require('express');
// const app=express()
// const jwt =require('jsonwebtoken');

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmFzaWwiLCJpYXQiOjE2NTYyMTgzMDcsImV4cCI6MTY1NjMwNDcwN30.8stO2bIruElLVA2RG_PnLjKcwFNLpIPaOmIKGg1mAyk"


// function tokencreate (req,res,next){
//     let Token=jwt.sign({name:"basil"},"secret",{expiresIn:"1day"})
//     console.log(Token);
//     next()

// }
// function Veify(req,res,next){
//     let verfytoken=jwt.verify(token,"secret")
//     console.log("Verifyd",verfytoken);
//     next()
// }

// app.post('/',tokencreate,(req,res)=>{
//     console.log(req.body)
//     res.json(req.body)
// })
// app.get('/',Veify,(req,res)=>{
//     res.json("Halooo")
//     console.log("Loading")
// })










// app.listen(4000,()=>{
//     console.log("server Running 4000")
// })


let Arr =[1,2,3,4,5,6,6,4,]

let val=Arr[0]
let length=Arr.length

// for(let i=0;i<length;i++){
//     if(val<Arr[i]){
//         val=Arr[i]
//     }
// }
// console.log(val);
// const myFunc= new Promise ((resolve,reject)=>{
//             for(let i=0;i<length;i++){
//                 if(val<Arr[i]){
//                     val=Arr[i]
//                 }
//             }
//             // resolve(val)
//             reject('ERR')
//     })

// myFunc.then(a=>{console.log(a)}).catch(e=>console.log(e))


function myFunc(val,val2,cb){
    cb(val+val2)
}
function myFunct2(val,val2,cb){
    cb(val+val2)
}

myFunc(10,25,(a)=>{
    myFunct2(a,a,(b)=>{
        console.log(b)
    })
})