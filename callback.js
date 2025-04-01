const http = require("http");
const fs = require("fs");

console.log('Start');

const server = http.createServer((req, res) => {
    fs.writeFile("sangu.txt", "Hello Sangu, welcome to Node.js!", (err) => {
        if (err) {
            console.log(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Internal Server Error');
        }
        console.log("File Created");

        fs.readFile("sangu.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Error reading file');
            }
            console.log(data)
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    });

    console.log("Request received");
});

server.listen(3001, () => {
    console.log("Server is running at http://localhost:3001/");
});
