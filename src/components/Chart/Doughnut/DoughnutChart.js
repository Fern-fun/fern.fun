import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart(props) {
  const { diskSpace } = props;

  const data = {
    labels: [],
    datasets: [
      {
        data: diskSpace,
        backgroundColor: [
          "rgba(173, 247, 72, 0.8)",
          "rgba(251, 107, 139, 0.4)",
        ],
        borderColor: ["rgba(173, 247, 72, 1)", "rgba(251, 107, 139, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      width={"140px"}
      height={"140px"}
      className="doughnut"
    />
  );
}

export default DoughnutChart;
