const path = require('path');
const express = require('express');

const server = express()

server.set('port', process.env.PORT || 3001);

server.use(express.static(path.join(__dirname, '/')));

server.listen(server.get('port'), function () {
  console.log('listening on port: ', server.get('port'));
});