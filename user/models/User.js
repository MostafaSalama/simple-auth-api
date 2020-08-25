const mongoose = require('mongoose') ;

const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        trim:true,
        unique:true,
        index:true
    },
    email :{
        type:String,
        trim:true,
        unique:true,
        index:true,
    },
    passwordHash:String
})

const userModel = mongoose.model('User',UserSchema) ;

module.exports = userModel ;
