let Controller = require('./controller');
let CsvToJson = require('../service/csvToJson');
let CsvService = require('../service/csvService');
let CsvGeneratorService = require('../service/csvGeneratorService');
let CheckDataService = require('../service/checkDataService');
let SaveFileController = require('./saveFileController');

let RegisterController = require('./registerController');

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
            .then(data=>{//console.log(JSON.stringify(data))
                console.log(typeof(data))
                console.log(data[3].field5)
                let checkDataService = new CheckDataService(data);
                checkDataService.checkData()
                    .then(dataChecked=>{
                        //this.res.json(dataChecked.VAcorrectos, dataChecked.VLcorrectos)
                        //this.res.json(dataChecked)
                        let saveFileController = new SaveFileController()
                        
                        console.log(typeof('dataChecked.VLcorrectos '+dataChecked.VLcorrectos))
                        saveFileController.saveFile(dataChecked.VAcorrectos, dataChecked.VLcorrectos)
                            .then(correcto=>console.log('datos guardados correctamente->'+correcto))
                            .catch(err=>console.error('error guardando archivos->'+err))
                        
                    })
                    .catch(error=>{
                        console.error(error);
                    })

                this.res.json(data)
            })
            .catch(e=>{
                console.error(e)
                this.res.status(500).json('Error en la conversion de archivos: '+e)
            });
    }

    /*convertCsv2(){
        let ruta = this.req.file.destination+'/'+this.req.file.filename
        console.log(ruta)
        let MyData = [];
        
        csv({
            delimiter: ';',
            columns: true
        }).from.path(ruta)
            
        .to.array(function (data) {
            
            for (var index = 0; index < data.length; index++) {                
                MyData.push(new CsvService(data[index][0], data[index][1], data[index][2], data[index][3]));
            }
            console.log(data);
            
            
        });

        this.res.json(MyData)
       
    } 

    convertCsv3(){
        let ruta = this.req.file.destination+'/'+this.req.file.filename
        let csvGeneratorService = new CsvGeneratorService();
        csvGeneratorService.csvGenerate(ruta);
    }*/



}

module.exports = ConvertController;