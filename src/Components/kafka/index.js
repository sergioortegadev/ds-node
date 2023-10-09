import express from "express";
import constrollers from "./controller.js";
import KafkaConfig from "./config.js";

const app = express();
app.use(express.json())

app.post("/users", constrollers.add);
app.get("/users", constrollers.get);

// consume from topic "test-topic"
const kafkaConfig = new KafkaConfig();
kafkaConfig.consume("users", (value) => {
    console.log("========= RECIBO MENSAJE ============");
    console.log(value);
    console.log("========= FIN DE MENSAJE ============");
});

app.listen(8777, () => {
  console.log(`Server is running on port 8777.`);
});
