import React from "react";
import brandLogo from "../../assets/images/logo.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={brandLogo} alt="Logo"></img>
  </div>
);

export default logo;
