class extractData{
     extractE(isin, dateFrom, dateTo, objVl){
        let result = [];
        return new Promise((resolve, reject)=>{
            //console.log(isin)
            //console.log(dateFrom)
            //console.log(dateTo)
            dateFrom = parseInt(dateFrom);
            console.log(typeof(dateFrom));
            dateTo = parseInt(dateTo);
            objVl = JSON.parse(JSON.stringify(objVl))
            console.log('cosnoel log del obj4 '+objVl[4].field3)
            let fecha;
            for (let i=0; i<objVl.length;i++){
                fecha = parseInt(objVl[i].field3);
                   if(fecha>dateFrom && fecha<dateTo){
                        result.push(objVl[i].field4);                        
                   }               
            }
            console.log(result);
            resolve(result);
            reject('error en la lectura de archivos'); 
        })
    }
}

module.exports = extractData;