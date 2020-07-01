import React from "react";
import classes from "./BuildControl.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>
      {props.label},&nbsp;&nbsp;
      <div className={classes.IngredientPrices}>{props.ingredientPrices}$</div>
    </div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
