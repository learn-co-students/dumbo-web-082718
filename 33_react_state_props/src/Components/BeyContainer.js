import React, { Component } from "react";
import BeyCard from "./BeyCard";
import BeyForm from "./BeyForm";
import { BeyImages, JayImages } from "../images";
import { Route } from "react-router-dom";

class BeyContainer extends Component {
  state = {
    beyImages: BeyImages
  };

  clickHandler = () => {
    console.log("in clickHandler");
    this.setState({
      renderOrNah: !this.state.renderOrNah
    });
  };

  submitHandler = (e, obj) => {
    e.preventDefault();
    console.log("logging", obj);
    let newArray = [...this.state.beyImages, obj];
    this.setState({
      beyImages: newArray
    });
  };

  getBeyObj = id => {
    return this.state.beyImages.find(beyObj => beyObj.id === id);
    //will return an obj
  };

  render() {
    let beyCards = this.state.beyImages.map(beyObj => (
      <BeyCard
        key={beyObj.name}
        beyObj={beyObj}
        clickHandler={this.clickHandler}
      />
    ));
    return (
      <div>
        <Route
          path="/bey/:id"
          render={props => {
            let id = parseInt(props.match.params.id);
            return <BeyCard beyObj={this.getBeyObj(id)} />;
          }}
        />
        <Route
          exact
          path="/bey"
          render={() => {
            return (
              <div>
                <BeyForm submitHandler={this.submitHandler} />
                {beyCards}
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default BeyContainer;
