const mongoose = require('mongoose');

const TOMTOM = new mongoose.Schema({
    email: {
        type:String,
        required: true
    },
    psw:{
        type: String,
        required: true
    },
    pswr: {
        type: String,
        required: true
    }
})

const Register = new mongoose.model("Register",TOMTOM);
module.exports = Register;