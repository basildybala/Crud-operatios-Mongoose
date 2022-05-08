const express = require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
const route=require('./server/routes/route')
const connectDB=require('./server/database/connection');




const app = express();

dotenv.config({path:'config.env'})
const PORT=process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true} ));

// set view engine
app.set("view engine", "ejs")
//app.set("views" path.resolve(dirname, "views/ejs"))

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/img", express.static(path.resolve(__dirname, "assets/img")))
app.use("/js", express.static(path.resolve(__dirname, "assets/js")))

//load Router

app.use('/',route)
























app.listen(PORT,()=>{console.log('Server Running on http://localhost:3000');})

