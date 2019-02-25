module.exports = {
  config: {
    uri: process.env.REACT_APP_PROD
      ? "wss://mqtt-thermometer.herokuapp.com:443"
      : "ws://localhost:8080",

  }
};
