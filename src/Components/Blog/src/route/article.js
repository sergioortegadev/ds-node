import express from "express";
const router = express.Router();
import articleController from "../controller/article.js";
import logged from "../middleware/logged.js";
router.get("/", articleController.articles);
router.use(logged);
router.post("/article", articleController.newArticle);

export default router;
