import React from "react";
import "./Widget.scss";

function WidgetPanel(props) {
  return <div className="widgetPanel">{props.children}</div>;
}

export default WidgetPanel;
