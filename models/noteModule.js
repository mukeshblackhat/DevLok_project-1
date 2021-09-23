const mongoose = require('mongoose');

const notesSchema = {
    title: String,
    admin:String,
    subject: String,
    written: String,
   
}

const Note=mongoose.model("Note",notesSchema);

module.exports=Note;
  