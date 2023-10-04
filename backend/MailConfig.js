var nodemailer=require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'arjunreddy3126@gmail.com',
      pass: 'Tarun@3110'
    }
  });

  module.exports=transporter