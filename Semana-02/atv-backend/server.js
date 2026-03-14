const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const filename = (req.method === 'GET' && req.url === '/') ? 'index.html' : '404.html';
    const status = filename === 'index.html' ? 200 : 404;
    
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Erro ao ler arquivo');
        }
        res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });

}).listen(8080);