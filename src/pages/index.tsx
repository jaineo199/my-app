import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic<any>(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => null,
});

const App = () => {
  const [chartData, setChartData] = useState({
    options: {
      grid: {
        show: false,
      },

      xaxis: {
        labels: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },

      chart: {
        height: 140,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ["#fcba03"],
      dataLabels: {
        formatter: function (val: any, opt: any) {
          const goals =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          }
          return val;
        },
      },

      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"],
        },
      },
    },

    series: [
      {
        name: "Actual",
        data: [
          {
            x: "check",
            y: 12,
            goals: [
              {
                name: "Expected",
                value: 14,
                strokeWidth: 2,
                strokeDashArray: 0,
                strokeColor: "#000000",
              },
            ],
          },
        ],
      },
    ],
  });

  return (
    <div className="app">
      <div className="row">
        <div
          className="mixed-chart"
          style={{
            marginTop: "50px",
          }}
        >
          <ApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="500"
            height="150"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
