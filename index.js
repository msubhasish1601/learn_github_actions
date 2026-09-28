const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // Change Content-Type from application/json to text/html
  res.setHeader('Content-Type', 'text/html');
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Live CI/CD Pipeline</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 50px;
          border-radius: 16px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          text-align: center;
        }
        h1 { margin-top: 0; font-size: 2.5rem; letter-spacing: 1px; }
        p { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; }
        .badge {
          background: #4ade80;
          color: #064e3b;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
          display: inline-block;
        }
        .timestamp { margin-top: 20px; font-size: 0.85rem; opacity: 0.7; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 CI/CD Pipeline Active</h1>
        <p>Your Docker container was built by GitHub Actions and deployed by Render.</p>
        <div class="badge">System Status: Online</div>
        <div class="timestamp">Last Updated: ${new Date().toLocaleString()}</div>
      </div>
    </body>
    </html>
  `;
  
  res.end(html);
});

server.listen(port, () => {
  console.log(`Server is successfully running on port ${port}`);
});