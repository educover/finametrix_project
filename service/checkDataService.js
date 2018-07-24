

class checkDataService{
  constructor(csvJson){
    this.ISDNObject = csvJson;
  }

  checkData(){

    let lineas = this.ISDNObject;

    return new Promise((resolve,reject)=>{
        let VLerrores=[];
        let VLcorrectos = [];
        let VAerrores=[];
        let VAcorrectos = [];
        let niVAniVL = [];
        let VA01 = {};
        for (let i=0; i<lineas.length; i++){
            var fecha = /^(?:(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8])))))$/;
            var price  = /^[0-9]{1,}(\,[0-9]{1,})?$/;
            ES0000000001
            if(lineas[i].field1==='VA'){

            }


           
            /*if(lineas[i].field1==='VL'){

                let isValid = fecha.test(lineas[i].field3) && price.test(lineas[i].field4)

                if(!isValid) {
                    VLerrores.push(lineas[i])
                } else {
                    lineas[i].field4 = parseFloat(lineas[i].field4.replace(',','.'))
                    VLcorrectos.push(lineas[i])
                }
            } else if(lineas[i].field1==='VA'){ 
                let isValid = true
                if(!isValid) {
                    VAerrores.push(lineas[i])
                } else {
                    VAcorrectos.push(lineas[i])
                }
            } else {
                niVAniVL.push(lineas[i])
            }*/
        }
        console.log(typeof('dataChecked.VAcorrectos '+(lineas.VAcorrectos)))
        //VLcorrectos.field3.sort();
        resolve({VLerrores, VLcorrectos, VAerrores, VAcorrectos, niVAniVL})
        reject()
    })
  }

}
module.exports = checkDataService;
