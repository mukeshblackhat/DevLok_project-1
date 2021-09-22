const express = require("express");
const router = express.Router();
// const parse= require('html-react-parser');

const Note = require("../models/noteModule"); 
 

router.route("/notes").post( async (req,res)=>{
    const title=req.body.title;
    const subject=req.body.subject;
    const written=req.body.written;
    // const content= 
    const newNote= new Note({ 
         title,subject,written,
     });
    
    newNote.save();
});

// router.get("/Lobby").get((req,res)=>{
//   Note.find().then(foundNotes=>console.log(foundNotes));
    
// })
    const api = (req,res) =>{
    Note.find().then(foundNotes=>res.send(foundNotes));
}
router.get("/Lobby", api);


 
module.exports=router; 