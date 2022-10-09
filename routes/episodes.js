var express = require("express");
var router = express.Router();
var data = require("../fakeData/episodes");
/* Este controlador no fue generado de forma automática 
    Se va a encargar de responder las consultas que se hagan a la ruta
    de los personajes.
*/

/*
  cuidado acá, no va /episodes. Explicar el agregado de rutas implícito
    que hace express+node
*/
router.get("/", function (req, res, next) {
  /*
    Esto rompe porque no podemos responder dos veces.
*/

  res.json(data);
});

module.exports = router;
