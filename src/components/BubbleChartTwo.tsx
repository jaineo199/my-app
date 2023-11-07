import React from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BubbleChart = () => {
  const options: any = {
    chart: {
      type: "bubble",
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Sample Data",
        data: [
          { x: 1, y: 20, z: 10, fillColor: "#C9232380" },
          { x: 2, y: 15, z: 30, fillColor: "#FFE60080" },
          { x: 3, y: 25, z: 35, fillColor: "#45D13680" },
          { x: 4, y: 30, z: 25, fillColor: "#45D13680" },
          { x: 5, y: 10, z: 45, fillColor: "#C9232380" },
          { x: 6, y: 35, z: 20, fillColor: "#FFE60080" },
          { x: 7, y: 45, z: 10, fillColor: "#45D13680" },
          { x: 8, y: 37, z: 10, fillColor: "#45D13680" },
        ],
      },
    ],

    xaxis: {
      tickAmount: 8,
      title: {
        text: "Revenue",
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 5,
      title: {
        text: "CPP",
      },
    },
    grid: {
      show: false,
      padding: {
        left: 30,
      },
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: true,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "black",
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: true,
        format: "dd MMM",
        formatter: undefined,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName: any) => seriesName,
        },
      },
      z: {
        formatter: undefined,
        title: "Size: ",
      },
      //   marker: {
      //     show: true,
      //   },
      items: {
        display: "flex",
      },
      //   fixed: {
      //     enabled: false,
      //     position: "topRight",
      //     offsetX: 0,
      //     offsetY: 0,
      //   },
    },
  };

  return (
    <div>
      <ApexChart
        options={options}
        series={options.series}
        type="bubble"
        height={600}
        width={500}
      />
    </div>
  );
};

export default BubbleChart;
