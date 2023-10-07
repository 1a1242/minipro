
const cors = require('cors');
var express = require('express');
var dbConnect = require('./dbConnect');
var apiRouter = require('./router/apiRouter');
var dbLib = require("./lib/fetchUtils")


dbConnect.connect(true)
var app = express();
app.use(cors());
app.use(express.json());
app.use('/api/publications',apiRouter)
// app.get('/api/publications', dbLib.getData);
// app.post('/api/data', dbLib.postData)
// app.post('/api/edit')
// app.get('/message', (req, res) => {
//     res.json({ message: "Hello from server!" });
// });
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
  