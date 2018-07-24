let deleteDecimal = require('./deleteDecimal');
class calculate{
    calculates(dateFrom, dateTo, euros, objVl){
        let result = {}
        return new Promise((resolve, reject)=>{
            let precioFin=0;
            let precioInicio=0;
            console.log(typeof(objVl) + ' typeof de objVl en calculate')
            console.log(typeof(objVl.field3))
            console.log('lengh del objvl->' + objVl.length)
            for (let i = 0; i<objVl.length; i++) {
                if(dateFrom == objVl[i].field3){
                    //console.log('numero->'+objVl[i].field4)
                    //console.log('suma->'+precioInicio)
                    precioInicio += objVl[i].field4
                    //parseFloat(precioInicio);
                    console.log(typeof(precioInicio)+' este es el typeof del precioIniciio')
                }
                if(dateTo == objVl[i].field3){
                    precioFin += objVl[i].field4
                    //parseFloat(precioFin);
                    //console.log(precio fin)
                }  
            }
            
            result.rentabilidad = (precioFin-precioInicio)/precioInicio;

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

            result.desviacionEstandar = Math.sqrt(varianzaTotal)
            //console.log('esta es la media->' + media)
            //console.log('esta es la varianza->' + varianza)
            //console.log('esta es la varianza total->' + varianzaTotal)

            deleteDecimal.checkDecimal

            resolve(result);
            reject('error en los calculos');
        })
    }
}

module.exports = calculate;