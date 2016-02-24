var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
var exec = require('child_process').exec;

var rand = Math.floor((Math.random() * 100) + 1);

var domanda;
var scelta;

server.listen(3000);

// usa express per gestire il routing
//
// quando il client richiede (con metodo GET) il
// percorso '/', invia il file index.html
app.get('/', function(req, res) {
  console.log('è stato inviato il file index.html ad un client che ne ha fatto richiesta');
  res.sendFile(__dirname+'/index.html');
});

//decide la domanda da fare

if (rand%2) {
	domanda ="lascia entrambi gli occhi scoperti e scatta una foto";
	scelta =2;
}else{
	domanda="copri un occhio e scatta una foto";
	scelta=1;
}


// usa socket.io per registrare le azioni da compiere
// quando si verificano certi eventi.
//
// Gestisce l'evento 'connection'
io.on('connection', function(socket) {
  // all'avvio di una connessione viene creato un socket!
  console.log('stabilita una connessione');

    socket.on('photo_capture', function(data) {
    console.log('ricevuto buffer');
    var img = data.buffer.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(img, 'base64');
    fs.writeFile('pictures/image.jpg', buf);
    
    exec("python eyeDetect.py pictures/image.jpg ojoright.xml");
  });

exec("cp pictures/PlaySchool.jpg pictures/image_result.jpg");

  // a connessione avvenuta,
  // usa il modulo fs per monitorare il file match_res.jpg
  fs.watch(__dirname+'/pictures/image_result.jpg', function(evt, filename) {
    console.log('rilevata variazione immagine');

    // in caso di variazione del file match_res.jpg lo reinvia
    // al client tramite il socket precedentemente creato
    fs.readFile(__dirname+'/pictures/image_result.jpg', function(err, buf) {
      socket.emit('update_image', {image: true, buffer: buf.toString('base64')});
    });
  });

});

console.log('server listening on port 3000');
