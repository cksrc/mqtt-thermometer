const mqtt = require("mqtt");
const wsClient = require("./ws-client");
const { mqtt: config } = require("./config")[process.env.NODE_ENV];

let client = "";
/**
 * Should serve as a proxy between MQTT broker without ws support and our react app
 */

client = mqtt.connect(config.host);

client.on("connect", function() {
  client.publish(config.pub_topic, config.message);
  setInterval(function() {
    client.publish(config.pub_topic, config.message);
  }, config.polling_interval);
});

client.subscribe(config.sub_topic, function(err) {
  if (!err) {
    console.log("Subscribed on " + config.sub_topic);
  }
});
client.on("message", (topic, message) => {
  let context = message.toString();
  if (process.env.NODE_ENV === "DEV") {
    console.log(topic, context);
  } else if (process.env.NODE_ENV === "PROD") {
    wsClient.sendTemperature(message);
  }
});
