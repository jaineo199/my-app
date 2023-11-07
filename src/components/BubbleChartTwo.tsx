import React from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BubbleChart = () => {
  const options: any = {
    chart: {
      type: "bubble",
    },
    series: [
      {
        name: "Sample Data",
        data: [
          [1, 20, 40],
          [2, 15, 30],
          [3, 25, 35],
          [4, 30, 25],
          [5, 10, 45],
          [6, 35, 20],
          [7, 45, 10],
          [8, 50, 30],
        ],
      },
    ],
    xaxis: {
      tickAmount: 4,
      title: {
        text: "X-Axis",
      },
    },
    yaxis: {
      tickAmount: 5,
      title: {
        text: "Y-Axis",
      },
    },
  };

  return (
    <div>
      <ApexChart
        options={options}
        series={options.series}
        type="bubble"
        height={600}
        width={1200}
      />
    </div>
  );
};

export default BubbleChart;
