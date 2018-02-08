const yargs = require('yargs');
const Server = require('./app');
const argv = yargs
    .usage('anydoor [option]')
    .option('p', {
        alias: 'port',
        describe: 'set port number',
        default: 8888
    })
    .option('h', {
        alias: 'hostname',
        describe: 'set host name',
        default: '127.0.0.1'
    })
    .option('d', {
        alias: 'root',
        describe: 'set root path',
      default: process.cwd()
    })
    .version()
    .alias('v', 'version')
    .help()
    .argv;


const server = new Server(argv);
server.start();
