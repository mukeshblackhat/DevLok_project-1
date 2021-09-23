const express = require("express");
const router = express.Router();
// const parse= require('html-react-parser');

const Admin = require("../models/adminModule"); 
 

router.route("/signIn").post( async (req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
    // const content= 
    const newAdmin= new Admin({ 
         username,email,password,
     });
    
    newAdmin.save();
});

// router.get("/Lobby").get((req,res)=>{
//   Note.find().then(foundNotes=>console.log(foundNotes));
    
// })
    const api2 = (req,res) =>{
    Admin.find().then(foundNotes=>res.send(foundNotes));
}
router.get("/signIn", api2);


 
module.exports=router; 