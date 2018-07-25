let Controller = require('./controller');
let CsvToJson = require('../service/csvToJson');
let CsvService = require('../service/csvService');
let CsvGeneratorService = require('../service/csvGeneratorService');
let CheckDataService = require('../service/checkDataService');
let SaveFileController = require('./saveFileController');
let ExtractData = require('../helpers/extractData');
let Calculate = require('../helpers/calculates');

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
                        let registerController = new RegisterController();
                        registerController.insertCsvVa(dataChecked.VAcorrectos)
                        registerController.insertCsvVl(dataChecked.VLcorrectos)
                        this.res.json(dataChecked.VLerrores)
                        /*let extractData = new ExtractData();
                        extractData.extractE("ES0000000001", 20000101, 20000105, dataChecked.VLcorrectos)
                            .then(euros=>{
                                //console.log(typeof(euros))
                                console.log('length de euros ->'+euros.length)
                                //this.res.json(euros)
                                let calculate = new Calculate();
                                calculate.calculates('20000101', '20000105', euros, dataChecked.VLcorrectos)
                                    .then(result=>{
                                        this.res.json(result)
                                    })
                            })
                            .catch(e=>console.error(e))

                        let saveFileController = new SaveFileController()                        
                        console.log(typeof('dataChecked.VLcorrectos '+dataChecked.VLcorrectos))
                        saveFileController.saveFile(dataChecked.VAcorrectos, dataChecked.VLcorrectos)
                            .then(correcto=>console.log('datos guardados correctamente->'+correcto))
                            .catch(err=>console.error('error guardando archivos->'+err))*/                        
                    })
                    .catch(error=>{
                        console.error(error);
                    })

                //this.res.json(data)
            })
            .catch(e=>{
                console.error(e)
                this.res.status(500).json('Error en la conversion de archivos: '+e)
            });
    }

}

module.exports = ConvertController;