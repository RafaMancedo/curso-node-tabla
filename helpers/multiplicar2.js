
const fs = require('fs');
const colors = require('colors');



const crearArchivo = async(base = 6, listar = false, hasta) => {
    
    
        try {

            let salida ='';
            let consola = '';
            
            for (let i = 1; i <= hasta; i++) {
                
                salida += (`  ${base} x ${i} = ${base * i} \n`);
                consola += (`  ${base} ${'x'.green} ${i} ${'='.magenta} ${base * i} \n`);
            }
            if (listar) {
                console.log('================\n'.underline.red);
                console.log(`  Tabla del ${base}`.inverse);
                console.log('================\n'.rainbow);
                console.log(salida);
            }
        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida);
            return `Tabla del ${base}.txt`;
        } catch (err) {
            throw err;
        }
    
        
    
}


module.exports = {
    crearArchivo 
};

