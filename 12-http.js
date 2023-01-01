const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  else if (req.url === '/about') {
    res.end('this is our short history')
  }
  res.end(`
  <h1>OOps!</h1>
  <p> We can't seem to find the page you are loading.</p>
  <a href="/">Back Home</a>
  `)
})

// what port my servere gonna listen to

server.listen(5000)