
const express = require('express');
const app=express()
const jwt =require('jsonwebtoken');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmFzaWwiLCJpYXQiOjE2NTYyMTgzMDcsImV4cCI6MTY1NjMwNDcwN30.8stO2bIruElLVA2RG_PnLjKcwFNLpIPaOmIKGg1mAyk"


function tokencreate (req,res,next){
    let Token=jwt.sign({name:"basil"},"secret",{expiresIn:"1day"})
    console.log(Token);
    next()

}
function Veify(req,res,next){
    let verfytoken=jwt.verify(token,"secret")
    console.log("Verifyd",verfytoken);
    next()
}

app.post('/',tokencreate,(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})
app.get('/',Veify,(req,res)=>{
    res.json("Halooo")
    console.log("Loading")
})










app.listen(4000,()=>{
    console.log("server Running 4000")
})