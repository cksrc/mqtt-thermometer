const WebSocket = require("ws");
const config = require("./config")[process.env.NODE_ENV];

const wss = new WebSocket.Server({ port: config.ws.port });
let temperature = 0;
wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    temperature =
      process.env.NODE_ENV === "DEV" ? message : message.split(";")[2];
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(temperature);
      }
    });
  });

  ws.send(temperature);
});
