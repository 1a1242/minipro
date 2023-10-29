const nodemailer = require("nodemailer");
require('dotenv').config()
const transporter = nodemailer.createTransport({
  service: "gmail",
  host:'smtp.gmail.com',
  auth: {
    user: 'devisriya26@gmail.com',
    pass: 'xlrxfvlmhbhccegm'
  },
});

module.exports.main=async function(message,sub,address){
  const info = await transporter.sendMail({
    from: 'devisriya26@gmail.com', // sender address
    to: address, // list of receivers
    subject: sub, // Subject line // plain text body
    html:message,
  });

  console.log("Message sent to",address);
}

//main().catch(console.error)