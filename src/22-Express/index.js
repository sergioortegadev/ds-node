import express from "express";
import "dotenv/config";

const app = express();

//const users = []

app.get("/users", function (req, res) {
  //res.send("te devuelvo todos los users"); // devuelve texto plano
  res.json({
    mensaje: "Te devuelvo los usuarios",
    infoAdicional: "Otros datos adicionales",
  });
});

app.listen(process.env.PORT, () => {
  console.log(" - App funcionando ok - ");
}); // La Func Listen tiene un callback, la que se puede utilizar para chequear
