import React from "react";
import Auxillery from "../../hoc/Auxillery";

const layout = (props) => (
  <Auxillery>
    <div>Toolbar, SIdeDrawer, BackDrop</div>
    <main>{props.children}</main>
  </Auxillery>
);

export default layout;
