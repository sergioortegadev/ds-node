import express from "express";
const router = express.Router();
import authController from "../controller/auth.js";

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/logout", authController.logout);

export default router;
