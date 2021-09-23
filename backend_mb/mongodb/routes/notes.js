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
   
   const author=req.body.author
   
   const allWrittenNotes= await writtenNotes.find(author)
   res.json(allWrittenNotes)
   // console.log(allWrittenNotes)//ye null kyo aa rha ha ?????

   // res.json(allWrittenNotes)
   if(allWrittenNotes==null){res.send("nothing found about this user")}
   else{
   try {
      res.send("its success")
      
   } catch (error) {
      res.send(`their is trouble in finiding your notes ${author}`)
   }
   }
}) 


























module.exports= router