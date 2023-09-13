const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const userMiddleware = require("../middlewares/users");

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

    res.status(201).json({
      mensaje: "El user " + req.body.firstname + " ha sido agregado",
      user: data,
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
      mensaje: `el usuario ha sido actualizado, el nuevo nombre es: ${req.body.firstname}`,
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
      mensaje: `el usuario ha sido eliminado`,
    });
  } catch (error) {
    res.status(404).json({
      mensaje: error,
    });
  }
});

module.exports = router;
