class checkDataService
{
  constructor(isdn){
    this.ISDNObject = isdn;
  }

  checkData(){

    let lineas = this.ISDNObject.lineas;

    return new Promise((resolve,reject)=>{
        let errores=[];
        for (let i=0; i<lineas.length; i++){
            var fecha = /^(?:(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8])))))$/;
            if(fecha.test(lineas[i].fecha) == false){
                errores.push({"linea": i, "fecha":lineas[i].fecha});
            }
        }
        resolve({"resultado": "ok", "elementoserroenos":errores});
        reject();
    })
  }

}
module.exports = checkDataService;
