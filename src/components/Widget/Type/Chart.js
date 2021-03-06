import React, { useEffect, useState } from "react";
import DoughnutChart from "../../Chart/Doughnut/DoughnutChart";

function Chart() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.fern.fun/pi/hardware/disk/free/")
      .then((response) => response.json())
      .then((data) => {
        setData([
          data.total - data.free,
          data.total - (data.total - data.free),
        ]);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="widget chartWidget">
      <div className="chartContent">
        {error ? (
          <div className="chartText">
            <span id="title">API Error</span>
          </div>
        ) : (
          <>
            <div className="chartText">
              <span id="title">Disk space</span>
              <span id="used">Used</span>
              <span id="free">Free</span>
            </div>
            <DoughnutChart diskSpace={data} />
          </>
        )}
      </div>
    </div>
  );
}

export default Chart;
