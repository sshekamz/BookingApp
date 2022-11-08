const express=require('express');

const route=express();
const userController=require('../controller/user');

//POST Request
route.post('/user/add-user', userController.addUser);

//GET Request
route.get('/user/get-user', userController.getUser);

//DELETE Request

route.delete('/user/delete-user/:id',userController.deleteUser);

module.exports=route;