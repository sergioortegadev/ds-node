import KafkaConfig from "./config.js";

const kafkaConfig = new KafkaConfig();
kafkaConfig.consume("users", (value) => {
    console.log("========= RECIBO MENSAJE EN OTRO APLICACION ============");
    console.log(value);
    console.log("========= FIN DE MENSAJE ============");
});
