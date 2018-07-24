const mongoose = require('../configuration/connectionMongo');
const csvVlSchema = require('../schemas/csvVaSchema').csvVlSchema;

const vlModel = {
    Vl : mongoose.model('SchemaVl', csvVlSchema)
}

//module.exports = vlModel;