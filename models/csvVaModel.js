const mongoose = require('mongoose');

let vaSchema = Mongoose.Schema ({   
        tipo_registro : String,
        isin : String,
        nombre : String,
        divisa : String,
        familia : String
});

let vaModel = mongoose.model('vaModel',vaSchema);
module.exports = vaModel;
