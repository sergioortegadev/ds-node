import express from "express";
const router = express.Router();
import userController from "../controller/users.js";
import logged from "../middleware/logged.js";
import admin from "../middleware/admin.js";

router.use(logged);
router.get("/profile", userController.profile);

router.use(admin);
router.get("/allUsers", userController.allUsers);

export default router;
