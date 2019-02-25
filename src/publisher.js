const mqtt = require("mqtt");
const faker = require("faker");

module.exports = function publisher(uri) {
  let client = mqtt.connect(uri);
  client.on("connect", function() {
    setInterval(function() {
      let temperature = faker.random.number({ min: 0, max: 100 }).toString();
      client.publish("temperature-topic", temperature);
      console.log("Temperature changed: ", temperature);
    }, 5000);
  });

  client.on("error", function(error) {
    console.log("Error", error)
  });
};
