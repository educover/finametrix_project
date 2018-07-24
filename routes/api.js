var express = require('express');
var router = express.Router();
let ReadFilesController = require('../controllers/readFilesController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let readFilesController = new ReadFilesController(req, res, next);
  readFilesController.readFile()
    .then(file=>{
        res.json(file);
    })
    .catch(e=>{
        res.json('error->'+e)
    })
});

module.exports = router;
