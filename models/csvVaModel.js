const mongoose = require('../configuration/connectionMongo');
const csvVaSchema = require('../schemas/csvVaSchema').csvSchemaVa;

//var vaModel = mongoose.model('vaModel', csvVaSchema)

let vaModel = {
    Va : mongoose.model('SchemaVa', csvVaSchema)
}

module.exports = vaModel;