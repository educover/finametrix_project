var express = require('express');
const UploadService = require('../service/uploadService');
var router = express.Router();
let uploadService = new UploadService();
let upload = uploadService.up();
let ConvertController = require('../controllers/convertController');
let CsvToJson = require('../service/csvToJson');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('file'),(req, res, next)=>{
  let convertController = new ConvertController(req, res, next);
  convertController.convertCsv();
  
});

module.exports = router;
