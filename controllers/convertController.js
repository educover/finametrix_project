let Controller = require('./controller');
let CsvToJson = require('../service/csvToJson');

class ConvertController extends Controller{
    constructor(req, res, next){
        super(req, res, next);
    }

    convertCsv(){
        let ruta = this.req.file.destination+'/'+this.req.file.filename
        let csvToJson = new CsvToJson(ruta);
            csvToJson.convertToJson()
            .then(data=>{console.log(JSON.stringify(data))
                this.res.json(data)
            })
            .catch(e=>{console.error(e)
                this.res.json('Error en la conversion de archivos: '+e)
            });
    }


}

module.exports = ConvertController;