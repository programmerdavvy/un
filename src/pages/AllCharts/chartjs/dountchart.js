import React from "react"
import { Doughnut } from "react-chartjs-2"

const DountChart = () => {
  const data = {
    labels: ["Desktops", "Tablets"],
    datasets: [
      {
        data: [300, 210],
        backgroundColor: ["#556ee6", "#ebeff2"],
        hoverBackgroundColor: ["#556ee6", "#ebeff2"],
        hoverBorderColor: "#fff",
      },
    ],
  }
  const options = {
    plugins: {
      legend: {
        position: 'right',
        rtl: true,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        }
      }
    },
  };
  return <Doughnut width={474} height={260} data={data} options={options} />
}

export default DountChart
