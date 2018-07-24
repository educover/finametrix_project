class extractData{
     extractE(isin, dateFrom, dateTo, objVl){
        let result = [];
        return new Promise((resolve, reject)=>{
           objVl.filter(item=>{
               if(isin === item.field2){
                   if(dateFrom<=item.field3 && dateTo>=item.field3){
                        result.push(item.field4);
                   }
               }
           })
           resolve(result);
           reject('error en la lectura de archivos') 
        })
    }
}

module.exports = extractData;