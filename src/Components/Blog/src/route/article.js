import express from "express";
const router = express.Router();
import articleController from "../controller/article.js";
import logged from "../middleware/logged.js";
router.post("/article", articleController.newArticle);

router.get("/", articleController.articles);

router.use(logged);

export default router;
