var express = require("express");
var router = express.Router();

/* Este controlador no fue generado de forma automática 
    Se va a encargar de responder las consultas que se hagan a la ruta
    de los personajes.
*/

/*
  cuidado acá, no va /characters. Explicar el agregado de rutas implícito
    que hace express+node
*/
router.get("/", function (req, res, next) {
  /*
    Esto rompe porque no podemos responder dos veces.

    res.send('acá respondemos los personajes');
    res.json(info)
*/
  //res.send('acá respondemos los personajes');
  res.json(info);
});

module.exports = router;
