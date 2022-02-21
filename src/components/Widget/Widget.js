import React, { useState, useEffect } from "react";

function getTime() {
  let date = new Date();
  return [
    date.getHours().toString(),
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    date,
  ];
}

function Widget(props) {
  const { type } = props;

  const [time, setTime] = useState(getTime());
  const [latency, setLatency] = useState(
    <span style={{ color: "white" }}>{"N/A"}</span>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let start = 0;
    start = new Date().getTime();
    let data = "";
    fetch("https://api.fern.fun/pi/hardware/data/")
      .then((response) => response.json())
      .then((data) => {
        const end = new Date().getTime();
        const ms = end - start;
        if (ms < 500) {
          setLatency(<span style={{ color: "#b7e382" }}>{ms + "ms"}</span>);
        } else if (ms < 5000 && ms > 500) {
          setLatency(<span style={{ color: "#ffd16e" }}>{ms + "ms"}</span>);
        } else if (ms > 5000) {
          setLatency(<span style={{ color: "#fd6888" }}>{ms + "ms"}</span>);
        }
      })
      .catch((error) => {
        if (error) {
          setLatency("API not available");
        }
      });
    const intervalAPI = setInterval(() => {
      if (type === "apiStatus") {
        let start = 0;
        start = new Date().getTime();
        let data = "";
        fetch("https://api.fern.fun/pi/hardware/data/")
          .then((response) => response.json())
          .then((data) => {
            const end = new Date().getTime();
            const ms = end - start;
            if (ms < 500) {
              setLatency(<span style={{ color: "#b7e382" }}>{ms + "ms"}</span>);
            } else if (ms < 5000 && ms > 500) {
              setLatency(<span style={{ color: "#ffd16e" }}>{ms + "ms"}</span>);
            } else if (ms > 5000) {
              setLatency(<span style={{ color: "#fd6888" }}>{ms + "ms"}</span>);
            }
          })
          .catch((error) => {
            if (error) {
              setLatency("API not available");
            }
          });
      }
    }, 10000);

    return () => clearInterval(intervalAPI);
  }, []);

  if (type === "logo") {
    return (
      <div className="widget logoWidget">
        <div className="logo">
          <img src="/img/fern.fun.png" alt="logo" />
        </div>
      </div>
    );
  } else if (type === "time") {
    return (
      <div className="widget timeWidget">
        <span id="date">
          {time[2].toLocaleDateString("en-EN", { weekday: "short" }) +
            " " +
            time[2].toLocaleString("en-EN", { month: "long" }) +
            " " +
            time[2].getFullYear()}
        </span>
        <div className="time">
          <span id="hours">{time[0] ? time[0] : "00"}</span>
          <span id="colon">:</span>
          <span id="minutes">{time[1] ? time[1] : "00"}</span>
        </div>
      </div>
    );
  } else if (type === "github") {
    return (
      <div className="widget githubWidget">
        <div className="githubLogo">
          <a href="https://github.com/Fern-fun" target={"_blank"}>
            <img src="/img/github.svg" alt="github" />
          </a>
        </div>
      </div>
    );
  } else if (type === "mail") {
    return (
      <div className="widget mailWidget">
        <div className="mailLogo">
          <a
            href="mailto:contact@fern.fun?subject=Message%20to%20Fern.fun&body=Hello%20..."
            target={"_blank"}
          >
            <img src="/img/gmail.svg" alt="mail" />
          </a>
        </div>
      </div>
    );
  } else if (type === "apiStatus") {
    return (
      <div className="widget statusWidget">
        <div className="status">
          <div className="statusImg">
            <img src="/img/poland.svg" alt="poland" />
          </div>

          <span>Web API</span>
          {latency}
        </div>
      </div>
    );
  }
}

export default Widget;
