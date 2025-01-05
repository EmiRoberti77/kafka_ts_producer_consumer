import { KafkaClient, Producer, Message } from "kafka-node";

const client = new KafkaClient({
  kafkaHost: "localhost:9092",
});
const producer = new Producer(client);

const topic = "emi-topic";
const messages: Message[] = [
  { key: "key1", value: "Hello emi", topic },
  { key: "key2", value: "Kafka with typescript", topic },
];

producer.on("ready", () => {
  producer.send([{ topic, messages }], (err, data) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("data", data);
    }
  });
});

producer.on("error", (err) => {
  console.error(err);
});
