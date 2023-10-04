const nodemailer = require("nodemailer");
require('dotenv').config()
const transporter = nodemailer.createTransport({
  service: "gmail",
  host:'smtp.gmail.com',
  auth: {
    user: '19311a05f4@sreenidhi.edu.in',
    pass: 'hphgjxesyhozgkhg'
  },
});

module.exports.main=async function(message,sub,address){
  const info = await transporter.sendMail({
    from: '19311a05f4@sreenidhi.edu.in', // sender address
    to: 'tarunnallavalli@gmail.com', // list of receivers
    subject: sub, // Subject line // plain text body
    html:message,
  });

  console.log("Message sent to",address);
}

//main().catch(console.error)