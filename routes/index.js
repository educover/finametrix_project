var express = require('express');
const UploadService = require('../service/uploadService');
var router = express.Router();
let uploadService = new UploadService();
let upload = uploadService.up();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('file'),(req, res, next)=>{
  
  console.log(req.file);
  res.json(req.file);
  
});

module.exports = router;
