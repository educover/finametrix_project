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
            .on('data', (data)=>{
                console.log(JSON.stringify(data))
            })
            .then((jsonObj)=>{
                //console.log(jsonObj)
                 resolve(jsonObj);
            })
            .catch(e=>{
                 reject(e);
            })
        });
        
    }
   
}

module.exports = CsvToJson;