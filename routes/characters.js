var express = require("express");
var router = express.Router();
var data = require("../fakeData/characters");
/* Este controlador no fue generado de forma automática, lo agregamos nosotros.
    Se va a encargar de responder las consultas que se hagan a la ruta
    de los personajes.
*/

/*
  cuidado, acá no hay que agregar /characters en las rutas. 
  Express ya lo agregó de forma implícita cuando matcheó en el app.js.
*/

router.get("/", function (req, res, next) {
  /*
    Esto que aparece abajo en el comentario rompería porque "no podemos responder dos veces".

    res.send('acá respondemos los personajes');

    // Este segundo envío en el objeto de response rompería porque se cerró el pipe
    en las comunicación entre el cliente y el servidor.
    res.json(info)
  */

  res.json(data.results);
});

/*
  Agregamos la posibilidad de seleccionar un personaje en particular.
  Esta selección la hacemos por id, mapeado en el lugar de :id

*/
router.get("/:id", (req, res) => {
  var idRequest = parseInt(req.params["id"]);
  var respuesta = data.results.find((x) => x["id"] === idRequest);

  if (respuesta === undefined) {
    res.send("No se encontró el elemento buscado");
  } else {
    res.json(respuesta);
  }
});

/*
  En este endpoint podemos agregar un personaje.

  POST /characters/

  Body : 
  {
    "id": 1,
    "name": "Objeto modificado",
    "status": "Alive",
    "species": "Técnico",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
}
*/
router.post("/", (req, res) => {
  var body = req.body;
  data.results.push(body);
  res.json(body);
});

/*
  En este endpoint podemos modificar un personaje.

  PUT /characters/:id

  En el body tenemos que poner EXACTAMENTE cómo queremos que quede el objeto
  El id para saber qué objeto vamos a modificar lo ponemos en la ruta en el campo :id

  Body : 
  {
    "id": 1,
    "name": "Objeto modificado",
    "status": "Alive",
    "species": "Técnico",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
}
*/

router.put("/:id", (req, res) => {
  var idRequest = parseInt(req.params["id"]);
  var body = req.body;
  var index = data.results.findIndex((x) => x["id"] == idRequest);

  data.results[index] = body;

  res.json(data.results[index]);
});

module.exports = router;
