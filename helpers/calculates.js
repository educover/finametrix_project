let DeleteDecimal = require('./deleteDecimal');
class calculate{
    calculates(dateFrom, dateTo, euros, objVl){
        let result = {}
        return new Promise((resolve, reject)=>{
            let precioFin=0;
            let precioInicio=0;
            objVl = JSON.parse(JSON.stringify(objVl))

            for (let i = 0; i<objVl.length; i++) {
                if(dateFrom == objVl[i].field3){
                    precioInicio += objVl[i].field4
                }
                if(dateTo == objVl[i].field3){
                    precioFin += objVl[i].field4
                }  
            }
            
            result.performance = (precioFin-precioInicio)/precioInicio;

            let media=0;

            for (let i = 0; i < euros.length; i++) {
                media += euros[i]                
            }

            media = media/euros.length;
            let varianza = [];

            for (let i = 0; i < euros.length; i++) {
                varianza.push(Math.pow(euros[i]-media, 2))                
            }

            let varianzaTotal = 0;

            for (let i = 0; i < varianza.length; i++) {
                varianzaTotal +=varianza[i]
            }
            
            varianzaTotal = varianzaTotal/(euros.length-1);

            result.volatility = Math.sqrt(varianzaTotal)
            
            resolve(result);
            reject('error en los calculos');
        })
    }
}

module.exports = calculate;