const mongoose=require('mongoose')
const Schema=mongoose.Schema

const LoginSchema=new Schema({
    Name:{
        type : String,
        require:true
    },
    Email:{
        type: String,
        require:true,
        unique:true
    },
    Password:{
        type: String,
        require:true
    },
    admin:{
        type: Boolean,
        default: false
    },
    verified:
    {
        type:Boolean,
        default: false
    }
})

const Login=mongoose.model('Login',LoginSchema,'LoginData')
module.exports=Login