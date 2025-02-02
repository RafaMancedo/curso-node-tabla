const fs = require('fs');

const crearArchivo = async( base = 5 ) => {
   
    try {
        console.log(`=====================\n`);
        console.log(`  TABLA DEL ${base} \n`);
        console.log(`=====================\n`);

        let salida='';

        for (let i = 1; i <= 10 ; i++) {
            salida += (`${base} * ${i} = ${base*i} \n`);
            
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`,salida);

        return `tabla-${base}.txt`;    
    } catch (err) {
        throw err;
    }
    


}

module.exports = {
    crearArchivo
}