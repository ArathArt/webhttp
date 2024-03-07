//llamamamos el modulo http
const http = require('http');
//establecemos la url o ip de nuestro servidor
const hostname = '192.168.1.110'
//establecemos el puerto de escucha
const port = 3000;
//creamos una instancia http con reques y un response
const server = http.createServer((req, res) => {
    //el servidor respondera un codigo 200
    res.statusCode=200;
    //el servidor respondera con un texto plano
    res.setHeader('Content-Type', 'text/plain');
    //el servidor respondera el mensaje hola mundo
    res.end('<h1>Hola mundo</h1>')
});

server.listen(port, hostname, () => {
    console.log('El servidor se esta ejecutando en http://${hostname}:${port}/');
});