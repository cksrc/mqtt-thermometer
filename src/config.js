module.exports = {
  config: {
    uri: process.env.REACT_APP_PROD
      ? "wss://mqtt-thermometer.herokuapp.com:8080"
      : "ws://localhost:8080",

  }
};
