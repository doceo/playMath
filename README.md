# playSchool

## Autori
Autore: Diomede Mazzone con la collaborazione di Fabio Z Tessitore (@FabioZTessitore)

## Descrizione

Tag: NodeJS, ExpressJS, Socket.io, Python, client/server

Versione Stabile: 0.1
Licenza: GPL 3.0 o successive

Questo software ha scopo didattico, gli autori non si assumono la resposabilità di eventuali malfunzionamenti.
Consiste in un server che sfrutta la tecnologia Node per dialogare con un client connesso sulla porta 3000. Il client visualizza il flusso video acquisito da webcam e invia al server il frame scelto dall'utente. 


##Requisiti

* Raspberry PI (testato su Raspberry PI 2)
* npm (https://www.npmjs.com/)
* nodejs (https://nodejs.org/en/)
* Expressjs (http://expressjs.com/)
* socket.io (http://socket.io/)
* Python (matplotlib, numpy, cv2)

##Istallazione e Avvio
## Istallazione e Avvio

* modifica IP: nel file index.html bisogna modificare l'indirizzo IP del server

* l'applicazione server, scritta utilizzando la tecnologia NodeJs, fa uso dei
moduli ExpressJs e Socket.io.
Per l'installazione di tali dipendenze:
```
bash
$ npm install
```

```
bash
$ node app.js
```
oppure (per distribuzioni basate su Debian)
```bash
$ nodejs app.js
```

# Test Dev
