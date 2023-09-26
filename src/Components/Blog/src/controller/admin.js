const get = async (req, res) => {
  try {
    return res.status(200).json({ message: "  >>> Hola Admin :) " });
  } catch (error) {
    return res.status(500).json({ message: "XXX - Error inesperado :( " });
  }
};

export default { get };
