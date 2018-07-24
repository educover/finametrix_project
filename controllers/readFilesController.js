let Controller = require('./controller');
let fs = require('fs');

class ReadFilesController extends Controller{
    constructor(req, res, next){
        super(req, res, next)
    }

    readFile(){
        return new Promise((resolve, reject)=>{
        fs.readFile('archivos/headers', 'utf-8', (e, file) => {
            if(file){
                resolve(file)
            } else{
                reject(e)
            }
           
    })
    })
    }

}

module.exports = ReadFilesController;