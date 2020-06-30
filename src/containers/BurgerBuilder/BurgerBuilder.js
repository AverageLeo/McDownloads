import React, { Component } from "react";
import Auxillery from "../../hoc/Auxillery";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxillery>
        <Burger />
        <div>Build Controls</div>
      </Auxillery>
    );
  }
}

export default BurgerBuilder;
