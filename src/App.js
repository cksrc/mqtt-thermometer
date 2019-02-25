import React, { Component } from "react";
import Thermometer from "react-thermometer-component";
import "./App.css";
import { config } from "./config";

const mqtt = require("mqtt");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "0" };
  }
  componentDidMount() {
    this.subscribe();
  }
  subscribe() {
    console.log(config.uri);
    let client = mqtt.connect(config.uri);
    client.on("connect", function() {
      console.log("Connected to MQTT broker");
      client.subscribe("temperature-topic", function(err) {
        if (!err) {
          console.log("Subscribed on temperature-topic");
        }
      });
    });

    client.on("message", (topic, message) => {
      let context = message.toString();
      console.log(topic, context);
      this.setState({ temperature: context });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Thermometer
            theme="light"
            value={this.state.temperature}
            max="100"
            steps="3"
            format="°C"
            size="large"
            height="300"
          />
        </header>
      </div>
    );
  }
}

export default App;
