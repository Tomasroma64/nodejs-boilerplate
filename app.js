const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!')
});

server.listen(5500, () => {
    console.log('Serving on 5500')
})