module.exports = {
  config: {
    uri: process.env.REACT_APP_PROD
      ? "ws://mqtt-thermometer.herokuapp.com"
      : "ws://localhost:8080",

  }
};
