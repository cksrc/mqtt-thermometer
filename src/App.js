import React, { Component } from "react";
import Thermometer from "react-thermometer-component";
import "./App.css";

const config = require("./config")[process.env.REACT_APP_HOST_ENV];
let ws = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "0" };
  }
  componentDidMount() {
    ws = new WebSocket(config.ws.host + ":" + config.ws.port);
    ws.onmessage = message => {
      this.setState({ temperature: message.data });
    };
    ws.onclose = () => {
      console.log("Bye bye")
    }
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
