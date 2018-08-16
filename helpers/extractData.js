class extractData {
    extractE(isin, dateFrom, dateTo, objVl) {
        let result = [];
        return new Promise((resolve, reject) => {

            dateFrom = parseInt(dateFrom);
            dateTo = parseInt(dateTo);
            objVl = JSON.parse(JSON.stringify(objVl));
            let fecha;

            for (let i = 0; i < objVl.length; i++) {
                fecha = parseInt(objVl[i].field3);
                if (fecha > dateFrom && fecha < dateTo) {
                    result.push(objVl[i].field4);
                }
            }

            resolve(result);
            reject('error en la lectura de archivos');
        })
    }
}

module.exports = extractData;