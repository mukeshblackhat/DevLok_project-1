require('dotenv').config();
const express = require('express');
const router = express.Router();
const UserDetail = require('../models/user');
const jwt = require('jsonwebtoken');
const store = require('store');

async function  authenticateToken(req, res, next) {
  // const authHeader=req.headers['authorization']
  // // const token=authHeader && authHeader.split(' ')[1]
  // const token =req.cookies.jwtCookie
  //   console.log(res.cookies)
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

  // Make sure token exists
  // if (!token) {
  //     return next(new ErrorResponse('Not authorized to access this route', 401));
  // }

  if (token == null) {
    return res.sendStatus(401);
  }

  try {
    // Verify token
    //  const decoded =
    const decode = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const email=decode.email
    req.user = await UserDetail.findOne({email});
   //  console.log(req.user.email);
    next();
  } catch (err) {
    return next(err);
  }

  // jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
  // if(err)return res.sendStatus(403)

  // req.user=user

  // next()

  // })
}

// const { ConnectionPoolClosedEvent } = require('mongoose/node_modules/mongodb')
router.get('/posts', authenticateToken, async (req, res) => {
  // console.log('line is 10')
  // console.log(req.user)
 
  const details = await UserDetail.find({ email: req.user.email });
  console.log(details)
  res.status(200).json(details);
  
});

module.exports = router;
