let mongoose = require('mongoose');

//let db_lnk = 'mongodb://localhost:27017/PrimeraConexionMongol'

//let db = mongoose.createConnection(db_lnk)
/*
mongoose.connect('mongodb://localhost:27017/PrimeraConexionMongol',
    { useNewUrlParser: true },
function(error){
    if(error){
       throw error; 
    }else{
       console.log('Conectado a MongoDB');
    }
 });*/
//module.exports = mongoose;

module.exports = function connect(){
    mongoose.connect('mongodb://localhost:27017/csv_finametrix',
        { useNewUrlParser: true },
        (error)=>{
            console.error(error);
        })
}