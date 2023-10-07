const  mongoose=require('mongoose')
const Schema=mongoose.Schema
var RegisterSchema=new Schema({
    Email:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    }
})

const Register=mongoose.model('Register',RegisterSchema,'RegisterData')
module.exports=Register