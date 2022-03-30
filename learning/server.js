// first server
//in this file, I have created a server using pure nodeJS

const http = require('http');

//using http.createServer() method
const server = http.createServer((req, res) => {
  console.log(req.url);

  res.end('<h1>Allah, forgive me!</h1> <p> my name is sabit bin Abdur Rouf </p>')  
})

server.listen(4146, ()=>{
  console.log('server is running')
})