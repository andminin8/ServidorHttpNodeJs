//Este simple servidor web escrito en Node responde con "Hello World" para cada solicitud.


const http = require('http');

const app_port = process.env.app_port || 8080;
const app_host = process.env.app_host || '127.0.0.1';


function procesarHttp(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(` <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>pagina HTML</title>
        </head>
        <body>
            <h1>titulo 1</h1>
        </body>
    </html>`
);



    res.end();
}

const server = http.createServer(procesarHttp);

server.listen(app_port);

console.log('Web server corriendo en http://' + app_host + ':' + app_port);
