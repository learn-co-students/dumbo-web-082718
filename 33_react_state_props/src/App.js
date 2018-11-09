import React, { Component } from "react";
import "./App.css";
import BeyContainer from "./Components/BeyContainer";
import JayContainer from "./Components/JayContainer";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/bey" component={BeyContainer} />
          <Route path="/jay" component={JayContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
