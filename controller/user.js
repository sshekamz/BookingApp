const express=require('express');
const User = require('../model/databaseTable');


//post request
const addUser= async (req,res)=>{
    
    const username=req.body.username;
    const email=req.body.email;
    const phonenumber=req.body.phonenumber;
    //console.log(username);
    const data= await User.create({username:username,email:email,phonenumber:phonenumber});
    res.status(201).json({newUserDeatil:data});

    

}

//GET Request

const getUser= async (req,res)=>{
    const users= await User.findAll();
    res.status(200).json({allUsers:users});
}

// DELETE Request

const deleteUser= async(req,res)=>{
    try {
        console.log("123"+ req.params.id);
        if(req.params.id=='undefined'){
            console.log('ID is missing');
            return res.status(404).json({err:'id is missing'})
        }
        const uId=req.params.id;
        await User.destroy({where:{id:uId}});
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
module.exports={
    addUser,
    getUser,
    deleteUser
};