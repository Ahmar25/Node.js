// Importing the http module
const http = require('http');

// Defining the host and port
const host = '0.0.0.0';
const port = 3000;

// Creating the server
const server = http.createServer((req, res) => {
  // Setting response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Sending a response message
  res.end('Hello, World!\n');
});

// Starting the server
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

