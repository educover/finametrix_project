let Controller = require('./controller');
let CsvToJson = require('../service/csvToJson');
let CsvService = require('../service/csvService');
let CsvGeneratorService = require('../service/csvGeneratorService');

let csv = require('csv');
let generate = require('csv-generate');
let parse = require('csv-parse');
let transform = require('stream-transform');
let stringify = require('csv-stringify');





class ConvertController extends Controller{
    constructor(req, res, next){
        super(req, res, next);
        
    }

    convertCsv(){
        let ruta = this.req.file.destination+'/'+this.req.file.filename
        let csvToJson = new CsvToJson(ruta);
            csvToJson.convertToJson()
            .then(data=>{console.log(JSON.stringify(data[0]))
                this.res.json(JSON.stringify(data))
            })
            .catch(e=>{console.error(e)
                this.res.json('Error en la conversion de archivos: '+e)
            });
    }

    convertCsv2(){
        let ruta = this.req.file.destination+'/'+this.req.file.filename
        console.log(ruta)
        let MyData = [];
        csv().from.path(ruta).to.array(function (data) {
            for (var index = 0; index < data.length; index++) {
                MyData.push(new CsvService(data[index][0], data[index][1], data[index][2], data[index][3], data[index][4]));
            }
            console.log(typeof(MyData));
            

        });
        this.res.json(MyData)
    } 

    convertCsv3(){
        let ruta = this.req.file.destination+'/'+this.req.file.filename
        let csvGeneratorService = new CsvGeneratorService();
        csvGeneratorService.csvGenerate(ruta);
    }



}

module.exports = ConvertController;