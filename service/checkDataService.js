
class checkDataService{
  constructor(csvJson){
    this.ISDNObject = csvJson;
  }

  checkData(){

    let lineas = this.ISDNObject;
    return new Promise((resolve,reject)=>{
        let VLerroresFecha=[];
        let VLerroresMoneda=[];
        let VLsinVA = [];
        let VLcorrectos = [];
        let VAerrores=[];
        let VAcorrectos = [];
        let miArray=[];
        let lineaErroresFecha = [];
        let lineaErroresMoneda = [];
        let lineaErroresVa = [];
        var fecha = /^(?:(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8])))))$/;
        var price  = /^[0-9]{1,}(\,[0-9]{1,})?$/;
        let i=0;

        for (i = 0; i < lineas.length; i++) {

            if(lineas[i].field1==='VA'){ 
                let isValid = true;
                if(!isValid){
                    VAerrores.push(lineas[i]);
                    lineaErroresVa.push(i)
                } else {
                    VAcorrectos.push(lineas[i]);
                }
            }
        }

        for (let x = 0; x < lineas.length; x++){
            if(lineas[x].field1==='VL'){

                if(!fecha.test(lineas[x].field3)){
                    VLerroresFecha.push(lineas[x]);
                    lineaErroresFecha.push(x);
                } else if(!price.test(lineas[x].field4)){
                    VLerroresMoneda.push(lineas[x]);
                    lineaErroresMoneda.push(x)
                } else{
                    lineas[x].field4 = parseFloat(lineas[x].field4.replace(',','.'));
                    VLcorrectos.push(lineas[x]);
                }
            }
        }

        for (let j = 0; j < VAcorrectos.length; j++) {
            for (let y = 0; y < VLcorrectos.length; y++) {
                if(VAcorrectos[j].field2 == VLcorrectos[y].field2){
                    miArray[y] = 1;
                } else if(miArray[y]=='1'){

                } else{
                    miArray[y] = 0;
                }
            }
        }
            let t = 0;
        for (let m = 0; m < miArray.length; m++) {
            if(miArray[m]==0){
                
                VLsinVA.push(VLcorrectos[m+t]);
                VLcorrectos.splice(m+t, 1);
                t--;
            }   
        }

        let registros={
             Vprocesados : i,
             regVLcorrectos : VLcorrectos.length,
             regVAcorrectos : VAcorrectos.length
        }
        
        
        resolve({VLsinVA,VLcorrectos, VLerroresFecha, VLerroresMoneda, 
            VAerrores, registros, VAcorrectos, lineaErroresFecha, lineaErroresMoneda, 
            lineaErroresVa});
        reject('error');
    })
  }

}
module.exports = checkDataService;
