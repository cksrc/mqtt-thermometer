const mosca = require("mosca");
const publisher = require("./publisher");
const { config } = require("./config");
console.log(config);
var settings = {
  http: {
    port: 8080,
    bundle: true,
    static: "./"
  }
};

var server = new mosca.Server(settings);

server.on("ready", function() {
  publisher(config.uri);
  console.log("ready");
});
