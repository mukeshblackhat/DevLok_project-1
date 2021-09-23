require('dotenv').config()
const express = require('express')
const router=express.Router()
const writtenNotes=require('../models/notesSchema')
// const jwt = require('jsonwebtoken')

//new notes are here to post 
router.post('/writter', async (req,res)=>{
   
   const notes= new writtenNotes({
      topic:req.body.topic,
      subject:req.body.subject,
      written:req.body.written,
      author:req.body.author
      //req.user.email
   })
   
   try {
      const instNotes= await notes.save()
      res.json(instNotes)
    } catch (err) {
      res.send("their is a error above in try")
   }
})


//getting all user notes
router.get('/allSaved',async (req,res)=>{
   
   const amaze=req.body.author.toString()
   
<<<<<<< HEAD
   const allWrittenNotes= await writtenNotes.find()
   .then(author=>res.send(authore);)res.json(allWrittenNotes)
=======
   const allWrittenNotes= await writtenNotes.find({author:amaze})
   console.log(allWrittenNotes)
>>>>>>> 584736d380b16ebbecab5074c550311e7346a062
   // console.log(allWrittenNotes)//ye null kyo aa rha ha ?????

  
   if(allWrittenNotes==null){res.send("nothing found about this user")}
   else{
   try {
      res.status(200).json(allWrittenNotes)
      
   } catch (error) {
      res.send(`their is trouble in finiding your notes ${author}`)
   }
   }
}) 


























module.exports= router