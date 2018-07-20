let Controller = require('./controller');

class separateDataController extends Controller{
    constructor(req, res, next){
        super(req, res, next);
    }
}

module.exports = separateDataController;