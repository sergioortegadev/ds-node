import { Kafka } from "kafkajs";

class KafkaConfig {
  constructor() {
    this.kafka = new Kafka({
      clientId: "kafka_consume",
      brokers: ["localhost:9092"],
    });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: "users_logs" });
  }

  async consume(topic, callback) {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({ topic: topic, fromBeginning: true });
      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          const value = message.value.toString();
          callback(value);
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default KafkaConfig;
