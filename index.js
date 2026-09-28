const http = require('http');

// Render provides a PORT environment variable dynamically. 
// We fallback to 3000 for local testing.
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ 
    message: "Hello from the live Render deployment!",
    status: "Success",
    timestamp: new Date().toISOString()
  }));
});

server.listen(port, () => {
  console.log(`Server is successfully running on port ${port}`);
});