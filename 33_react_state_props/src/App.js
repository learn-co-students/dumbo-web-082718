import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./Components/BeyContainer";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/bey" component={BeyContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
