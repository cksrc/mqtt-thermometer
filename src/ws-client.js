const WebSocket = require('ws');
const  config = require("./config")[process.env.NODE_ENV];

const ws = new WebSocket(config.ws.host+':'+config.ws.port);
 ws.isAlive=false;
ws.on('open', function open() {
  ws.isAlive = true;
});
 
ws.on('message', function incoming(data) {
  console.log("Node websocket received: ", data);
});

function sendTemperature(temperature) {
  if (ws.isAlive) {
      console.log("temperature: ", temperature.toString())
    ws.send(temperature.toString());
  } else {
      console.log("Not connected")
  }
}
module.exports = { sendTemperature };
