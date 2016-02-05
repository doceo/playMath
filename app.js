var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

server.listen(3000);

// usa express per gestire il routing
//
// quando il client richiede (con metodo GET) il
// percorso '/', invia il file index.html
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});

// usa socket.io per registrare le azioni da compiere
// quando si verificano certi eventi.
//
// Gestisce l'evento 'connection'
io.on('connection', function(socket) {
  // all'avvio di una connessione viene creato un socket!

  console.log('user connected');


});

console.log('server listening on port 3000');
