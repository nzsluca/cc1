const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


fetch("beers.json")
.then(function(resp){
    return resp.json();
})
.then(function (obj) { 
    console.log(obj);
 }).catch(function(error){
     console.error('something wrong');
     console.error(error);
 });