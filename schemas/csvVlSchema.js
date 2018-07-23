const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const schemasVl = {
    let csvSchemaVl = new Schema({
       tipo_registro : {type: String},
       isin : {type: String},
       fecha : {type: String},
       precio : {type: Number}
    })
//}
module.exports = mongoose.model('SchemaVl', csvSchemaVl);
