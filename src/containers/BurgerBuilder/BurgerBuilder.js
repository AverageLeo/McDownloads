import React, { Component } from "react";
import Auxillery from "../../hoc/Auxillery";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };

  render() {
    return (
      <Auxillery>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxillery>
    );
  }
}

export default BurgerBuilder;
