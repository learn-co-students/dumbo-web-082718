import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import BeyContainer from "./BeyContainer";
import JayContainer from "./JayContainer";

const JayBayContainer = () => {
  return (
    <div>
      <Switch>
        <Route path="/bey" component={BeyContainer} />
        <Route path="/jay/:id" render={(props) => {
          console.log(props);
        })} />
        {/* <Route path="/jay" component={JayContainer} /> */}
      </Switch>
    </div>
  );
};
