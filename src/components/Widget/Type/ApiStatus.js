import React, { useState, useEffect } from "react";

function ApiStatus() {
  const [latency, setLatency] = useState(
    <span style={{ color: "white" }}>{"N/A"}</span>
  );

  useEffect(() => {
    let start = 0;
    start = new Date().getTime();
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
      let start = 0;
      start = new Date().getTime();
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
    }, 20000);

    return () => clearInterval(intervalAPI);
  }, []);

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

export default ApiStatus;
