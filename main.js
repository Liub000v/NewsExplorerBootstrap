const path = require('path');
const express = require('express');

const server = express()
const port = 3000

server.use(express.static(path.join(__dirname, '/')));

server.listen(port, function () {
  console.log('listening on port: ', port);
});