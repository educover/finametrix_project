let Controller = require('./controller');
let CsvVaModel = require('../models/csvVaModel');
let CsvVlModel = require('../models/csvVlModel');


class registerController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    insertCsvVl(VL) {
        CsvVlModel.collection.insert(VL, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.info('VL insertados correctamente');
            }
        })
    }

    insertCsvVa(VA) {

        CsvVaModel.collection.insert(VA, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.info('VA insertados correctamente');
            }
        })
    }
}

module.exports = registerController;