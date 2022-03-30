// implement what I learned till now
// in this file I have applied the knowledge of node server, file system

const fs = require ('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  fs.readFile('./learning/index.html', (err, data) => {
    res.write(data);
    res.end()  
})
})

server.listen(4149, ()=>{
  console.log('server is running')
})