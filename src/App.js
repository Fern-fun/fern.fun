import React from "react";

import Widget from "./components/Widget/Widget";
import WidgetPanel from "./components/Widget/WidgetPanel";

function App() {
  const [visi, setVisibility] = React.useState(false);

  return (
    <div className="container">
      <div class="blackhole">
        <div class="megna">
          <div class="black"></div>
        </div>
      </div>

      <div className="vis">
        <img
          src={visi ? "/img/visibility_off.svg" : "/img/visibility.svg"}
          alt="visibility"
          onClick={() => setVisibility(!visi)}
          width="24px"
        />
      </div>

      <WidgetPanel style={{ visibility: visi ? "hidden" : "visible" }}>
        <Widget type="logo" />
        <Widget type="time" />
        <Widget type="github" />
        <Widget type="mail" />
        <Widget type="apiStatus" />
        <Widget type="chart" />
      </WidgetPanel>
    </div>
  );
}

export default App;
