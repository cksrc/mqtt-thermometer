const mosca = require("mosca");
const publisher = require("./publisher");
const wsClient = require("../ws-client");

const { mqtt: config } = require("../config")[process.env.NODE_ENV];
var settings = {
  http: {
    port: config.port,
    bundle: true,
    static: "./"
  }
};

var server = new mosca.Server(settings);


server.on("ready", function() {
  publisher();
});

server.on("published", function(packet, client) {
  wsClient.sendTemperature(packet.payload)
});