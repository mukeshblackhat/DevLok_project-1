require('dotenv').config()
const express = require('express')
const router=express.Router()
const writtenNotes=require('../models/notesSchema')
const jwt = require('jsonwebtoken');
const store = require('store');
// const jwt = require('jsonwebtoken')
async function authenticateToken(req, res, next) {
  const storeToken = store.get('jwtToken');
  console.log(storeToken);
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
    // Set token from cookie
  } else if (storeToken) {
    token = storeToken;
  }

  if (token == null) {
    return res.sendStatus(401);
  }

  try {
    await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);

      req.user = user;

      next();
    });
  } catch (err) {
    return next(err);
  }
}

//new notes are here to post 
router.post('/writter', authenticateToken, async (req,res)=>{
    
   const notes= new writtenNotes({
      topic:req.body.topic,
      subject:req.body.subject,
      written:req.body.written,
      author:req.user.email
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
router.get('/allSaved',authenticateToken,async (req,res)=>{
   
   const amaze=req.user.email
   
   const allWrittenNotes= await writtenNotes.find({author:amaze})
   console.log(allWrittenNotes)
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



// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
