//importo express
const express = require('express');

//definisco l'oggetto router
const router = express.Router();

//index
router.get('/', (req, res) => {
  res.send("Elenco dei post")
})

//esporto il router
module.exports = router;