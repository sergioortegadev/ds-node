import ArticleModel from "../model/articles.js";

const articles = async (req, res) => {
  try {
    const articles = await ArticleModel.find();
    return res.status(200).json({ message: " Listado completo de artículos publicados", articles });
  } catch (error) {
    return res.status(500).json({ message: " X - Error al obtener artículos - X" });
  }
};

const newArticle = async (req, res) => {
  console.log("llega a new article");
  try {
    let { title, slug, text, image, author } = req.body;
    const newArticle = new ArticleModel({ title, slug, text, image, author });
    await newArticle.save();
    const articleReturned = await ArticleModel.findOne({ title: req.body.title });

    return res.status(201).json({ message: `El artículo ${req.body.title} agregado con exito.`, articleReturned });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "XXX - Error inesperado al agregar artículo - XXX" });
  }
};

export default { articles, newArticle };
