//importo express
const express = require('express');
const app = express();
const port = 3000;

//dico ad express di utilizzare la cartella public
app.use(express.static('public'));


app.get('/', (req, res) => {
  console.log('Server del mio blog');
})

//dico al server di rimanere in ascolto
app.listen(port, () => {
  console.log(`Server in ascolto alla porta ${port}`);
})