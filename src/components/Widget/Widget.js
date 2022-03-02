import React from "react";

import ApiStatus from "./Type/ApiStatus";
import Mail from "./Type/Mail";
import Footer from "./Type/Footer";
import Github from "./Type/Github";
import Time from "./Type/Time";
import Logo from "./Type/Logo";
import Chart from "./Type/Chart";

function Widget(props) {
  const { type } = props;

  if (type === "logo") {
    return <Logo />;
  } else if (type === "time") {
    return <Time />;
  } else if (type === "github") {
    return <Github />;
  } else if (type === "mail") {
    return <Mail />;
  } else if (type === "apiStatus") {
    return <ApiStatus />;
  } else if (type === "chart") {
    return <Chart />;
  } else if (type === "footer") {
    return <Footer />;
  }
}

export default Widget;
