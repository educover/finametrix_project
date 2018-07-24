let fs = require('fs');
let Controller = require('./controller');

class SaveFileController{

    saveFile(headers, body){
        return new Promise((resolve, reject)=>{ 
            fs.writeFile('public/archivos/headers', JSON.parse(headers), (e) => {
            if(e) {
                // if any error saving the file respond with 500
                //this.res.json('error');
                return
            }
            // if all ok respond with 200 (OK)
            fs.writeFile('public/archivos/body', JSON.parse(body), (e) => {
                if(e) {
                    // if any error saving the file respond with 500
                    //this.res.json('error');
                    return
                }
                // if all ok respond with 200 (OK)
                //this.res.json('archivo guardado correctamente');
            })
        })
        resolve('datos guardados correctamente');
        reject('error al guardar archivos->'+e)
    })
    }
}



module.exports = SaveFileController;