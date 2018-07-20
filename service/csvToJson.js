const csv=require('csvtojson');

class CsvToJson{
    
    constructor(csvFilePath){
        this.csvFilePath=csvFilePath;
    }

    convertToJson(){
       return new Promise((resolve, reject)=>{
            csv({
                delimiter:';',
                noheader: true
            })
            .fromFile(this.csvFilePath)
            .then((jsonObj)=>{
                 resolve(jsonObj);
            })
            .catch(e=>{
                 reject(e);
            })
        });
        
    }
   
}

module.exports = CsvToJson;