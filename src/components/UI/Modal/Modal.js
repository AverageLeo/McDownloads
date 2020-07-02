import React from "react";
import classes from "./Modal.css";
import Auxillery from "../../../hoc/Auxillery";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <Auxillery>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        opacity: props.show ? "1" : "0",
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      }}
    >
      {props.children}
    </div>
  </Auxillery>
);

export default modal;
