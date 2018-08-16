let Controller = require('../controller');
let ExtractData = require('../../helpers/extractData')
let Calculate = require('../../helpers/calculates')

class calculateRentability extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    calculatesObj(valor) {
        let extractData = new ExtractData();
        extractData.extractE(this.req.query.isin, this.req.query.dateFrom, this.req.query.dateTo, valor)
            .then((data) => {

                let calculate = new Calculate();
                calculate.calculates(this.req.query.dateFrom, this.req.query.dateTo, data, valor)

                    .then(datosCalculados => {
                        this.res.json(datosCalculados);
                    })

                    .catch(e => console.error(e));
            })

            .catch(error => console.error(error));
    }
}

module.exports = calculateRentability