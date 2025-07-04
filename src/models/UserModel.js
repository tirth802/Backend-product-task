const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userschema = new Schema ({

    firstName:{
        type:String
    },
    

    password:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    }
})
module.exports = mongoose.model("users",userschema)