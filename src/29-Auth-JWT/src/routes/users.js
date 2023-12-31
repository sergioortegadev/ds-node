import express from "express";
const router = express.Router();
import userController from "../controllers/users.js";
import logged from "../middleware/logged.js";

router.use(logged);

router.get("/profile", userController.profile);

export default router;
