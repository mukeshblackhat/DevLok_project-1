require('dotenv').config();
const express = require('express');
const router = express.Router();
const UserDetail = require('../models/user');
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // const authHeader=req.headers['authorization']
  // // const token=authHeader && authHeader.split(' ')[1]
  // const token =req.cookies.jwtCookie
  console.log(res.cookies)
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
    // Set token from cookie
  } else if (req.cookies.jwtCookie) {
     
    token = req.cookies.jwtCookie;
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
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = user;
    next();
  } catch (err) {
    return res.sendStatus(403).json({ suucess: false, error: err });
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
  const details = await UserDetail.findOne({ email: req.user.email });
  res.json(details);
  res.sendStatus(200);
});

module.exports = router;
