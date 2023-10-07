var express = require('express');
var router = express.Router();
var dbLib = require("../lib/fetchUtils")

router.get('/data', dbLib.getData)
router.post('/update', dbLib.editData)
router.post('/insert',dbLib.postData)

module.exports =router;