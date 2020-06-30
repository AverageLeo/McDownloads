import React, { Component } from "react";
import Auxillery from "../../hoc/Auxillery";

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxillery>
        <div>Burger</div>
        <div>Build Controls</div>
      </Auxillery>
    );
  }
}

export default BurgerBuilder;
