var express = require('express');
const UploadService = require('../service/uploadService');
var router = express.Router();
let uploadService = new UploadService();
let upload = uploadService.up();
let CsvToJson = require('../service/csvToJson');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('file'),(req, res, next)=>{
  let ruta = req.file.destination+'/'+req.file.filename
  let csvToJson = new CsvToJson(ruta);
   csvToJson.convertToJson()
  .then(data=>console.log(JSON.stringify(data)))
  .catch(e=>console.error(e));
  
  
});

module.exports = router;
