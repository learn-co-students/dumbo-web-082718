import React, { Component } from "react";
import "./App.css";
import BeyContainer from "./Components/BeyContainer";
import JayContainer from "./Components/JayContainer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/bey" component={BeyContainer} />
          <Route path="/jay" component={JayContainer} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
