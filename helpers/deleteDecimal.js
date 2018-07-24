class deleteDecimal{

    static checkDecimal(num){
        let parteEntera = Math.trunc(num);
        let pos = num.toString().indexOf(".");
        let miString = num.toString();
        let parteDecimal = miString.substring(pos);
        let parteDecimalOk = parteDecimal[0]+parteDecimal[1]+parteDecimal[2];;
        return parteEntera+parteDecimalOk;
    }
}

module.exports = deleteDecimal;