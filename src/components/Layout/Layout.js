import React from "react";
import Auxillery from "../../hoc/Auxillery";
import classes from "./Layout.css";

const layout = (props) => (
  <Auxillery>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxillery>
);

export default layout;
