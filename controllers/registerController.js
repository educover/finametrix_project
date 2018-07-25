
let Controller = require('./controller');
let CsvVaModel = require('../models/csvVaModel');
let CsvVlModel = require('../models/csvVlModel');


class registerController extends Controller{
    constructor(req, res, next){
        super(req, res, next)
    }
   

    insertCsvVl(VL){
        CsvVlModel.collection.insert(VL, (err, docs)=>{
            if (err) {
                console.error(err)
            } else {
                console.info('%d VE were successfully stored.', docs.length);
            }
        })
    }
    //VLerrores, VLcorrectos, VAerrores, VAcorrectos, niVAniVL

    insertCsvVa(VA){

        CsvVaModel.collection.insert(VA, (err, docs)=>{
            if (err) {
                console.error(err)
            } else {
                console.info('%d VA were successfully stored.'+ docs.length);
            }
        })
       
        /*let valorVa = new CsvVaModel({
            tipo_registro : 'VA[i].field1',
            isin : 'VA[i].field2',
            nombre : 'VA[i].field3',
            divisa : 'VA[i].field4',
            familia : 'VA[i].field5'
        });
        valorVa.save(err=>{
            if(err) console.error(err);
            console.log("Almacenado");
          })
        
          this.res.json(valorVa);*/
    }
}

module.exports = registerController;