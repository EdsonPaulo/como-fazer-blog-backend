'use strict'
const http = require('http');
const debug = require('debug')('crud:server');
const app = require('../app/app');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('Como Fazer server running on ' + port);

/* Normmalize the server port */
function normalizePort( val ) {
    const port = parseInt(val, 10);
    if ( isNaN(port) ) return val;
    if ( port >= 0 ) return port;
    return false;
}

/* Handling errors on server */
function onError(error) {
    if( error.syscall !== 'listen' ) throw error;

    const bind = typeof port === 'string' ? 
        'Pipe ' + port :
        'Port ' + port; 

    switch (error.code) { 
        case 'EACCES':  
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;

        case 'EADDRINUSE': 
            console.error(bind + ' is already in use');
            process.exit(1);
            break;

        default: throw error;
    }
}

/* Handling any server events */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
    debug('Servidor escutando em ' + bind);
        
}
