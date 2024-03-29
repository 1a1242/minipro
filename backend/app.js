
const cors = require('cors');
var express = require('express');
var dbConnect = require('./dbConnect');
var apiRouter = require('./router/apiRouter');
const bodyParser= require('body-parser')
const jsonParser=bodyParser.json()
var dbLib = require("./lib/fetchUtils")
const Login=require('./lib/LoginController')
const Verify=require('./lib/VerificationController');
const Email=require('./lib/EmailController')
const Register=require('./lib/RegisterController')
const JSONTransport = require('nodemailer/lib/json-transport');

dbConnect.connect(true)
var app = express();
app.use(cors());
app.use(express.json());
app.use('/api/publications',apiRouter)
// app.get('/api/publications', dbLib.getData);
// app.post('/api/data', dbLib.postData)
// app.post('/api/edit')
// app.get('/api/data', dbLib.getData);
// app.post('/api/data', dbLib.postData)
app.post('/registerme',jsonParser,Login.Adduser,Register.Addrequest)
app.post('/userlogin',jsonParser,Login.Checkuser)
app.post('/changePassword',jsonParser,Login.ChangePassword)
app.post('/verify',jsonParser,Login.Sendverification)
app.post('/forgot',jsonParser,Verify.Checkemail,Verify.Addrequest)
app.post('/forgotpassword',jsonParser,Verify.ForgotPassword)
app.post('/newpassword',jsonParser,Verify.NewPassword)
app.post('/verifyemail',jsonParser,Register.VerifyEmail)
// app.get('/message', (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
  