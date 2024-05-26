import "./styles/MenuItem.css";

import React from "react";
import "../../node_modules/remixicon/fonts/remixicon.css";

export default ({ icon, title, action, isActive = null }) => (
  <button
    className={`menu-item${isActive && isActive() ? " is-active" : ""}`}
    onClick={action}
    title={title}
  >
    <i className={`ri-${icon}`}></i>
  </button>
);
