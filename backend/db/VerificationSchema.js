const  mongoose=require('mongoose')
const Schema=mongoose.Schema
var VerifySchema=new Schema({
    Email:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:10,
    }
})

VerifySchema.index({createdAt:1},{expireAfterSeconds:600})
const Verify=mongoose.model('Verify',VerifySchema,'VerificationData')
module.exports=Verify