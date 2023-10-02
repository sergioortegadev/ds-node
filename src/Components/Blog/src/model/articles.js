import "dotenv/config";
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    title: { type: String, required: true },
    slug: String,
    text: { type: String, required: true },
    image: String,
    categories: [{ type: String }],
  },
  { timestamps: true }
);

const ArticleModel = mongoose.model("articles", articleSchema);

export default ArticleModel;
