import { KafkaClient, Consumer } from "kafka-node";

const client = new KafkaClient({ kafkaHost: "localhost:9092" });
const consumer = new Consumer(client, [{ topic: "emi-topic", partition: 0 }], {
  autoCommit: true,
});

consumer.on("message", (message) => {
  console.log("Received message:", message);
  //const parsedValue = JSON.parse(message.value as string);
  console.log("Recieved", {
    ...message,
    value: message.value as string,
  });
});

consumer.on("error", (err) => {
  console.error("Consumer error:", err);
});
