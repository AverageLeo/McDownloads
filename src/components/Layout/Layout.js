import React from "react";
import Auxillery from "../../hoc/Auxillery";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <Auxillery>
    <Toolbar />
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxillery>
);

export default layout;
