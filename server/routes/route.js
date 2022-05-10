const express=require('express');
const route=express.Router()
const services=require('../services/render');
let controller=require("../controller/controller")



route.get('/',services.homeRoutes)

route.get('/add-user',services.add_user)

route.get('/update-user',services.update_user)


//API
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.post('/api/user/:id',controller.update)
route.get('/api/users-delete/:id',controller.delete)
route.get('/api/user/:id',controller.alluser)


















module.exports=route;