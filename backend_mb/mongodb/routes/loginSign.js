require('dotenv').config()
const express = require('express')
const router=express.Router()
const UserDetail=require('../models/user')
const jwt = require('jsonwebtoken')

const bcrypt=require('bcrypt')
// const { ConnectionPoolClosedEvent } = require('mongoose/node_modules/mongodb')


router.get('/users',(req , res)=>{
   res.json(users)
})


router.post('/signUp',async (req,res)=>{
   const salt = await bcrypt.genSalt(10);
   const hashedPassword=await bcrypt.hash(req.body.password ,salt )
     
   const user=new UserDetail({
      email:req.body.email,
      password:hashedPassword
   })

   try {
      const userSaver=await user.save()
      res.json(userSaver)
      res.status(201).send("Success")
   } catch (error) {
      res.status(500).send(error)
   }
  
})





let refreshTokens=[]

router.post('/token',(req,res)=>{
   const refreshToken=req.body.token
   if(refreshToken == null) return res.sendStatus(401)
   if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
      jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
      if(err) return res.sendStatus(403)
 
      const accessToken=generateAccessToken({
         email:user.email
      })
      res.json({accessToken:accessToken})
   })
  
 })




router.post('/login',async (req,res)=>{
  
   const { email, password } = req.body;
   const foundUser =await UserDetail.findOne( {email} )
   
  
   if(foundUser == null){
   return res.status(400).send('cannot find this user')
   }
   else{
      try{
        
         const isMatch = await bcrypt.compare(password,foundUser.password)
          
          if(isMatch){
 
             
             const user={ email:email }
               
                const accessToken= generateAccessToken(user)
                const refreshToken=jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
                      refreshTokens.push(refreshToken)
                     //  res.cookie('jwtCookie',accessToken)    
                     const options = {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
                        httpOnly: true,
                        secure: true
                    };
                           
                res.status(200).cookie('jwtCookie',accessToken,options).json({accessToken:accessToken , refreshToken:refreshToken})
         
         
         // res.send('Success')
         }
          else{res.send('not allowed')}

      }
      catch{
         res.status(500).send('its a catch')
      }
   }
  
})


 function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
 }





module.exports= router

