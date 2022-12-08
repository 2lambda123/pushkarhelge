const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TOMTOM",{
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection established Successfully...")
}).catch((e)=>{
    console.log("Connection not Successfull (:")
})