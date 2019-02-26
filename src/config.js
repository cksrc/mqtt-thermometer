module.exports = {
    DEV: {
      mqtt: {
        host:"ws://localhost",
        pub_topic: "temperature-topic",
        sub_topic: "temperature-topic",
        message: "",
        polling_interval: 5000,
        port:2221
      },
      ws: {
        host: "ws://localhost",
        port:2222
      }
    },
    PROD: {
      mqtt: {
        host: "mqtt://clouca.ddns.net",
        pub_topic: "subDCA140A4AE30",
        sub_topic: "pubDCA140A4AE30",
        message: "req;iostatus",
        polling_interval: 120000,
      },
      ws:{
        host: "ws://localhost",
        port: 2222
      } 
    }
}
