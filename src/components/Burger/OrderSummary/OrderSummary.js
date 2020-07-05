import React, { Component } from "react";
import Auxillery from "../../../hoc/Auxillery/Auxillery";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>
              {igKey}:{this.props.ingredients[igKey]}
            </span>
          </li>
        );
      }
    );

    return (
      <Auxillery>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.totalPrice.toFixed(2)}$</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxillery>
    );
  }
}

export default OrderSummary;
