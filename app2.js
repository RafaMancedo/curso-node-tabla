
const { crearArchivo } = require('./helpers/multiplicar2');
const  argv  = require('./config/yargs');


          
console.clear();

//console.log(process.argv);
/* const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base =8 ] = arg3.split('='); */

//console.log(arg3);
/* console.log(base);

//const base = 9;*/
crearArchivo(argv.b, argv.l, argv.h)
  .then (nombreArchivo => console.log(nombreArchivo.rainbow, ' creada!'))
  .catch(err => console.log(err)); 


console.log(argv);

//console.log('base: yargs', argv.b);

  
  