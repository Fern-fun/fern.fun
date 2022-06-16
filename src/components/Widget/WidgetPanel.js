import React from "react";
import "./Widget.scss";

function WidgetPanel(props) {
  const { style } = props;
  return (
    <div className="widgetPanel" style={style}>
      {props.children}
    </div>
  );
}

export default WidgetPanel;
