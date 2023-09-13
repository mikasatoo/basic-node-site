const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    let filePath = req.url;
    
    if (filePath === '/') {
        filePath = 'public/index.html';
    } else {
        filePath = 'public/' + req.url + '.html';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404: File not found');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});