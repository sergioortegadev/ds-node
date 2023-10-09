import KafkaConfig from "./config.js";

const users = []
const add = async (req, res) => {
  try {
    const { firstname, lastname, email } = req.body;

    //guardo el user en mi DB (en este caso un array)
    users.push({firstname, lastname, email})
    const user = users.slice(-1)

    //doy aviso a kafka del nuevo usuario
    const kafkaConfig = new KafkaConfig();
    const messages = [{ key: email, value: JSON.stringify(user)}];
    kafkaConfig.produce("users", messages);

    res.status(201).json({message: "el usuario ha sido agregado", user });
  } catch (error) {
    console.log(error);
  }
};

const get = async (req, res) => {
  res.status(200).json(users)
}

const constrollers = { add, get };

export default constrollers;
