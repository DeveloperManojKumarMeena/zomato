const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect(process.env.mogndb_uri)
    .then(()=>{
        console.log("MongoDB connected")
    })
    .catch((err)=>{
        console.log("mongodb err is " + err)
    })
}
module.exports=connectDB;