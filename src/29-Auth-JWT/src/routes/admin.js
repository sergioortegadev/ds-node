import express from "express";
const router = express.Router();
import adminController from "../controllers/admin.js";
import logged from "../middleware/logged.js";
import admin from "../middleware/admin.js";

router.use(logged);
router.use(admin);

router.get("/", adminController.get);

export default router;
