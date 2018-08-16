let mongoose = require('mongoose');

module.exports = function connect() {
    mongoose.connect('mongodb://localhost:27017/csv_finametrix', {
            useNewUrlParser: true
        },
        (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Conexion con mongo ok')
            }
        })
}