const LoginSchema=require('../db/LoginSchema')
const emailsender = require('./EmailController')
module.exports.Adduser=async function(req,res,next){
    try{
        const c=await LoginSchema.create(req.body)
        next()
        res.status(200).json(c)
    }
    catch(e)
    {
        res.status(404).json(e+'Invalid')
    }
}

module.exports.Checkuser=async function(req,res){
    try{
        console.log(req.body)
        const user=await LoginSchema.findOne({Email:req.body.Email}).select('-_id -__v')
        if(user==null)
        {
            res.status(404).json('User Not found')
        }
        else
        {   
           // console.log(user)
            if (req.body.Password===user.Password){
              // console.log(user.Name)
              user.Password = '';
                res.status(200).json(user)
            }
            else
            res.status(404).json('Invalid Username or Password')
        }
    }
    catch(e){
        res.status(404).json('Invalid Credentials')
    }
}

module.exports.ChangePassword=async function(req,res){
    try{
        const user=await LoginSchema.findOneAndUpdate({Email:req.body.Email},{$set:{Password:req.body.Password}})
        res.status(200)
    }
    catch(e){res.status(404)}
}


module.exports.Sendverification=async function(){
    res.writeHead(200, {'Content-Type': 'text/plain'});
        const status=await emailsender('hello world')
        if (status=='success')
        {res.end('ok')}
        else
        res.end('fail')
}