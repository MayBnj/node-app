const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello from Node.js App!');
});
server.listen(8080, () => console.log('Server running on 8080'));