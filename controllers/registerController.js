/*
let Controller = require('./controller');
let CsvVaModel = require('../models/csvVaModel');
let CsvVlModel = require('../models/csvVlModel');
let conn = require('../configuration/connectionMongo');
let SchemaVa = require('../schemas/csvVaSchema');

class registerController{
   

    insertCsvVl(){

    }
    //VLerrores, VLcorrectos, VAerrores, VAcorrectos, niVAniVL

    insertCsvVa(VAcorrectos){
        
            var csvVaModel = new SchemaVa(VAcorrectos);
            csvVaModel.save(function (err, data) {
                if (err) return handleError(err);
                return console.log('datos guardados->'+data)
            })
        
    }
}

module.exports = registerController;*/