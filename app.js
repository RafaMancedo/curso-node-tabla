

/* console.clear();
const base = 5;
let i = 5;
console.log("======================");

console.log(' Tabla de Base 5 ');
console.log("======================");


for (let i = 1;  i <= 10 ; i++) {
    console.log(`${base} * ${i} = ${base*i}`);
    
} */
    
    const { crearArchivo} = require('./helpers/multiplicar');
    
    console.clear();
    
    const base = 8;
    
    crearArchivo( base )
        .then( nombreArchivo => console.log(nombreArchivo, ' creado!'))
        .catch( err => console.log(err));
        


