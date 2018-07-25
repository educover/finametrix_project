var express = require('express');
var router = express.Router();
let DataController = require('../controllers/api/dataController');
let CalculateRentability = require('../controllers/api/calculateRentability');
let modelVl = require('../models/csvVlModel')

/* GET users listing. *////api/performance?isin=&dateFrom=&dateTo=``` 
router.get('/performance', function(req, res, next) {

    let dataController = new DataController(req, res, next)
    dataController.findData()
        .then((consulta)=>{           
            let calculateRentability = new CalculateRentability(req, res, next);
            calculateRentability.calculatesObj(consulta);
        })
        .catch(error=>this.res.json(error));
    
 
});

module.exports = router;
