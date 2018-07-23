const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const schemasVa = {
    let csvSchemaVa = new Schema({
       tipo_registro : {type: String},
       isin : {type: String},
       nombre : {type: String},
       divisa : {type: String},
       familia : {type: String}
    })
//}

module.exports = mongoose.model('SchemaVa', csvSchemaVa);