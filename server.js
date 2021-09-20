const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const url="mongodb+srv://robin:robinhood123@cluster0.846xj.mongodb.net/notesdb?retryWrites=true&w=majority"

app.use(express.json());
app.use(cors());


// connect to mogoose 
// mongoose.connect("mongodb+srv://robin:robinhood123@cluster0.846xj.mongodb.net/notesbd")
mongoose.connect(url,{useNewUrlParser:true})

const check=mongoose.connection
check.on('open',function(){
    console.log('connected')
})
 
// require route 
app.use("/",require("./routes/noteRoute"));


app.listen(3001,function(){
    console.log("express server is running on port 3001");
})