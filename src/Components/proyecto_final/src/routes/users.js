import express from "express";
const router = express.Router();
import usersController from "../controllers/users.js";
import userMiddleware from "../middlewares/users.js";

router.get("/", async function (req, res) {
  try {
    let users = await usersController.userShow();
    res.status(200).json({
      mensaje: "Te devuelvo todo los users",
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "error inesperado",
    });
  }
});

router.get("/auth", userMiddleware.auth, async function (req, res) {
  try {
    const { username, password } = req.body;
    // const username = req.params.username;

    let msj = await usersController.userAuth(username, password);

    res.status(200).json({
      mensaje: msj,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error,
    });
  }
});

router.get("/:id", userMiddleware.hasId, async function (req, res) {
  try {
    const id = req.params.id;
    let users = await usersController.userShow(id);
    res.status(200).json({
      mensaje: "Te devuelvo todo los users",
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "error inesperado",
    });
  }
});

router.post("/", userMiddleware.add, async function (req, res) {
  try {
    const data = await usersController.userAdd(req.body);
    data !== undefined
      ? res.status(201).json({
          mensaje: `el usuario ${data.username} con ID: ${data.id} se agregó con éxito.`,
          user: data,
        })
      : res.status(201).json({
          mensaje: ` ▒ El nombre de usuario ya esta registrado, elija otro.`,
        });
  } catch (error) {
    res.status(404).json({
      mensaje: error,
    });
  }
});

router.put("/:id", userMiddleware.hasId, async function (req, res) {
  try {
    const id = req.params.id;
    const users = await usersController.userUpdate(id, req.body);
    const userUpdated = await usersController.userShow(id);

    res.status(200).json({
      mensaje: `el usuario con ID:  ${users.id} ha sido actualizado`,
      userUpdated: userUpdated,
    });
  } catch (error) {
    res.status(404).json({
      mensaje: error,
    });
  }
});

router.delete("/:id", userMiddleware.hasId, async function (req, res) {
  try {
    const id = req.params.id;
    const users = await usersController.userDelete(id);

    res.status(200).json({
      mensaje: `el usuario con ID: ${id} ha sido eliminado`,
    });
  } catch (error) {
    res.status(404).json({
      mensaje: error,
    });
  }
});

export default router;
