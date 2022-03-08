const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.write('Hello, This is your first web application using Node.js');
    res.end();
});

server.listen(8080);