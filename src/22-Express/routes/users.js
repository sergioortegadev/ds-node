import express from "express";
const router = express.Router();

const users = [
  {
    id: 1000,
    name: "Juan Sodero",
    mail: "juan@mail.com",
  },
  {
    id: 1001,
    name: "Maria Carrasco",
    mail: "maria@mail.com",
  },
  {
    id: 1002,
    name: "Diego Gomez",
    mail: "diego@mail.com",
  },
  {
    id: 1003,
    name: "Anna Lopez",
    mail: "anna@mail.com",
  },
  {
    id: 1004,
    name: "Carlos Pereyra",
    mail: "carlos@mail.com",
  },
];

router.get("/", function (req, res) {
  res.status(200).json({
    mensaje: "Listado completo de usuarios:",
    users: users,
  });
});

router.get("/:indice", function (req, res) {
  const indice = req.params.indice; // captura el indice ingresado por parámetro
  let userSolo = users[indice];

  res.status(200).json({
    mensaje: `Se muestra solo el suario: ${userSolo.name}`,
    user: userSolo,
  });
});

router.post("/", function (req, res) {
  // El backend recibe del front estos datos (req), y devuelve el resultado (res) confirmando la acción.
  users.push(req.body);
  //console.log(req.body);

  res.status(201).json({
    mensaje: `Usuario ${req.body.name} creado con exito`, //
    users: users,
  });
});

router.put("/:indice", function (req, res) {
  const indice = req.params.indice; // captura el indice ingresado por parámetro
  users[indice] = req.body;

  res.status(200).json({
    mensaje: `Usuario ${users[indice].name} Actualizado`,
    users: users,
  });
});

router.delete("/:indice", function (req, res) {
  const indice = req.params.indice; // captura el indice ingresado por parámetro
  let userEliminado = users[indice].name;
  users.splice(indice, 1);

  res.status(200).json({
    mensaje: `Usuario ${userEliminado} eliminado!`,
    users: users,
  });
});

export default router;
