import React, { Component } from "react";
import classes from "./Modal.css";
import Auxillery from "../../../hoc/Auxillery/Auxillery";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {}

  render() {
    return (
      <Auxillery>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            opacity: this.props.show ? "1" : "0",
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
          }}
        >
          {this.props.children}
        </div>
      </Auxillery>
    );
  }
}

export default Modal;
