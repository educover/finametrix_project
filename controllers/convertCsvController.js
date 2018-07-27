let Controller = require('./controller');
let CsvToJson = require('../service/csvToJson');
let CheckDataService = require('../service/checkDataService');
let RegisterController = require('./registerController');

class ConvertController extends Controller{
    constructor(req, res, next){
        super(req, res, next);   
    }

    convertCsv(){
        let ruta = this.req.file.destination+'/'+this.req.file.filename
        let csvToJson = new CsvToJson(ruta);
            csvToJson.convertToJson()
            .then(data=>{

                let checkDataService = new CheckDataService(data);
                checkDataService.checkData()

                    .then(dataChecked=>{
                        
                        let registerController = new RegisterController();
                        registerController.insertCsvVa(dataChecked.VAcorrectos)
                        registerController.insertCsvVl(dataChecked.VLcorrectos)
                        this.res.render('listaErrores', {
                            title:'Lista errores',
                            VLsinVA:dataChecked.VLsinVA,
                            VLerroresFecha:dataChecked.VLerroresFecha,
                            VLerroresMoneda:dataChecked.VLerroresMoneda,
                            Vprocesados:dataChecked.Vprocesados

                        })                                     
                    })

                    .catch(error=>{
                        console.error(error);
                    })

            })

            .catch(e=>{
                console.error(e)
                this.res.status(500).json('Error en la conversion de archivos: '+e)
            });
    }
}

module.exports = ConvertController;