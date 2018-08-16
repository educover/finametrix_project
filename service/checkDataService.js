var moment = require('moment');

class checkDataService {
    constructor(csvJson) {
        this.ISDNObject = csvJson;
    }

    checkData() {
        //console.log(moment().format('YYYYMMDD'))
        let lineas = this.ISDNObject;
        return new Promise((resolve, reject) => {
            let VLerroresFecha = [];
            let VLerroresMoneda = [];
            let VLsinVA = [];
            let VLcorrectos = [];
            let VAerrores = [];
            let VAcorrectos = [];
            let miArray = [];
            let lineaErroresFecha = [];
            let lineaErroresMoneda = [];
            let lineaErroresVa = [];
            var price = /^[0-9]{1,}(\,[0-9]{1,})?$/;
            let i = 0;

            try {

                for (i = 0; i < lineas.length; i++) {

                    if (lineas[i].field1 === 'VA') {
                        let isValid = true;
                        if (!isValid) {
                            VAerrores.push(lineas[i]);
                            lineaErroresVa.push(i)
                        } else {
                            VAcorrectos.push(lineas[i]);
                        }
                    } else if (lineas[i].field1 === 'VL') {
                        if (!moment(lineas[i].field3, 'YYYYMMDD', true).isValid()) {
                            VLerroresFecha.push(lineas[i]);
                            lineaErroresFecha.push(i);
                        } else if (!price.test(lineas[i].field4)) {
                            VLerroresMoneda.push(lineas[i]);
                            lineaErroresMoneda.push(i)
                        } else {
                            lineas[i].field4 = parseFloat(lineas[i].field4.replace(',', '.'));
                            VLcorrectos.push(lineas[i]);
                        }
                    }
                }

                for (let j = 0; j < VAcorrectos.length; j++) {
                    for (let y = 0; y < VLcorrectos.length; y++) {
                        if (VAcorrectos[j].field2 == VLcorrectos[y].field2) {
                            miArray[y] = 1;
                        } else if (miArray[y] == '1') {

                        } else {
                            miArray[y] = 0;
                        }
                    }
                }
                let t = 0;
                for (let m = 0; m < miArray.length; m++) {
                    if (miArray[m] == 0) {
                        VLsinVA.push(VLcorrectos[m + t]);
                        VLcorrectos.splice(m + t, 1);
                        t--;
                    }
                }

                let registros = {
                    Vprocesados: i,
                    regVLcorrectos: VLcorrectos.length,
                    regVAcorrectos: VAcorrectos.length
                }


                resolve({
                    VLsinVA,
                    VLcorrectos,
                    VLerroresFecha,
                    VLerroresMoneda,
                    VAerrores,
                    registros,
                    VAcorrectos,
                    lineaErroresFecha,
                    lineaErroresMoneda,
                    lineaErroresVa
                });
            } catch {
                reject('error');
            }
        })
    }

}
module.exports = checkDataService;