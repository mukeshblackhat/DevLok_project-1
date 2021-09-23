const mongoose = require('mongoose');

const adminSchema = {
    username: String,
    email: String,
    password: String,
   
}

const Admin=mongoose.model("Admin",adminSchema);

module.exports=Admin;
  