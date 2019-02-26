const mqtt = require("mqtt");
const faker = require("faker");
const { mqtt: config } = require("../config")[process.env.NODE_ENV];


module.exports = function publisher() {
  let client = mqtt.connect(config.host+":"+config.port);
  client.on("connect", function() {
    setInterval(function() {
      let temperature = faker.random.number({ min: 0, max: 100 }).toString();
      client.publish(config.pub_topic, temperature);
    }, config.polling_interval);
  });

  client.on("error", function(error) {
    console.log("Error", error)
  });
};
