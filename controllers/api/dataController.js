let Controller = require('../controller');
let modelVl = require('../../models/csvVlModel')


class DataController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    findData() {
        return new Promise((resolve, reject) => {
            modelVl.find({
                field2: this.req.query.isin
            }, (err, valor) => {
                if (err) console.error(err);

                resolve(valor)
                reject('error')
            });
        });
    }
}

module.exports = DataController;