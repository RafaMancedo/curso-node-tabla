


const argv = require('yargs')
          .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Define la base de la Tabla de multiplicar'
          })
          .check( (argv, options) => {
              if( isNaN( argv.b ) ){
                throw 'La base tiene que ser un número'
              }
              return true;
          })

          .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe: 'Muestra la tabla de multiplicar en la consola'

          })

          .option('h', {
            alias: 'hasta',
            type: 'number',
            
            default: 10,
            describe: 'Define hasta que numero se desarrolla la tabla'

          })
          .argv;

module.exports = argv;