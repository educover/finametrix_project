const mongoose = require('mongoose');

let vlSchema = mongoose.Schema({
    tipo_registro: String,
    isin: String,
    fecha: String,
    precio: Number
});

let vlModel = mongoose.model('vlModel', vlSchema);
module.exports = vlModel;