module.exports = {
  config: {
    uri: process.env.PROD
      ? "ws://mqtt-thermometer.herokuapp.com:8080"
      : "ws://localhost:8080"
  }
};
