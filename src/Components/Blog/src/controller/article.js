import ArticleModel from "../model/articles.js";

const articles = async (req, res) => {
  if (req.body._id) {
    const article = await ArticleModel.findOne({ _id: req.body._id });
    if (article) {
      try {
        return res.status(200).json({ message: "- Un solo Artículo -", article });
      } catch (error) {
        return res.status(500).json({ message: " X - Error al traer un artículo - X" });
      }
    }
    return res.status(200).json({ message: "XXX - Error, artículo no encontrado - XXX" });
  }

  try {
    const articles = await ArticleModel.find();
    return res.status(200).json({ message: " Listado completo de artículos publicados", articles });
  } catch (error) {
    return res.status(500).json({ message: " X - Error al obtener artículos - X" });
  }
};

const newArticle = async (req, res) => {
  try {
    let { title, slug, text, image, author, categories, tags } = req.body;
    const newArticle = new ArticleModel({ title, slug, text, image, author, categories, tags });
    await newArticle.save();
    const articleReturned = await ArticleModel.findOne({ title: req.body.title });

    return res.status(201).json({ message: `El artículo ${req.body.title} agregado con exito.`, articleReturned });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "XXX - Error inesperado al agregar artículo - XXX" });
  }
};

const editArticle = async (req, res) => {
  const article = await ArticleModel.findOne({ _id: req.body._id });

  if (article) {
    try {
      let { title, text } = req.body;
      await ArticleModel.findOneAndUpdate({ _id: req.body._id }, { title, text });

      const articleModify = await ArticleModel.findOne({ _id: req.body._id });

      /* await article.save(); // También funciona así, sin el new Article */

      return res
        .status(200)
        .json({ message: `El artículo ${articleModify.title} modificado con exito.`, articleModify });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "XXX - Error inesperado al modificar artículo - XXX" });
    }
  }
  return res.status(200).json({ message: "XXX - Error, artículo a modificar no encontrado - XXX" });
};

const deleteArticle = async (req, res) => {
  const article = await ArticleModel.findOne({ _id: req.body._id });
  if (article) {
    try {
      await ArticleModel.findOneAndDelete({ _id: req.body._id });

      return res.status(200).json({ message: `El artículo ${article.title} eliminado con exito.` });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "XXX - Error inesperado al eliminar artículo - XXX" });
    }
  }
  return res.status(200).json({ message: "XXX - Error, artículo a eliminar no encontrado - XXX" });
};

export default { articles, newArticle, editArticle, deleteArticle };
