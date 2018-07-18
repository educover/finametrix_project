const csv=require('csvtojson');

class CsvToJson{
    
    constructor(csvFilePath){
        this.csvFilePath=csvFilePath;
    }

    convertToJson(){
       return new Promise((resolve, reject)=>{
            csv()
            .fromFile(this.csvFilePath)
            .then((jsonObj)=>{
                 resolve(jsonObj);
            })
            .catch(e=>{
                 reject(e);
            })
        });
        /*setTimeout(() => {
            csv()
            .fromFile(this.csvFilePath)
            .then((jsonObj)=>{
            console.log(typeof(jsonObj));
                return jsonObj;
            
        })
        }, 5000);*/
        
    }
   
}

module.exports = CsvToJson;