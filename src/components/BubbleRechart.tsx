import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import BubbleChartData from "../../src/bubbleChartData.json";

ChartJS.defaults.borderColor = "#FFFFFF";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options: any = {
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Revenue", // Custom label for x-axis
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "CPP", // Custom label for y-axis
      },
    },
  },
};

// {
//     "campaign_name": "(not set)",
//     "cost": 4582.8,
//     "fa_revenue": 1842733.3,
//     "fa_cpp": 0.2,
//     "cpp_target": 20
//   },

export const data = {
  datasets: [
    // {
    //   label: "CPP",
    //   data: [
    //     { x: 1842733.3, y: 0.2, r: 45.28 },
    //     { x: 640.3, y: 2.2, r: 3.8 },
    //     { x: 23.3, y: 3.2, r: 0.000000079 },
    //     { x: 2.3, y: 4.2, r: 0.000054 },
    //     { x: 170.3, y: 0.2, r: 0.458 },
    //   ],
    //   backgroundColor: "rgba(255, 99, 132, 0.5)",
    // },
    {
      label: "Revenue",
      data: [
        { x: 1842733.3, y: 0.2, r: 4582.8 },
        { x: 311539.5, y: 0, r: 0 },
        { x: 292314.8, y: 0, r: 0 },
        { x: 258677.3, y: 16.1, r: 24220.6 },
        { x: 229302.7, y: 0.000012345, r: 9257.4 },
        { x: 216583.7, y: 26.9, r: 34294.2 },
        { x: 137576.8, y: 19.5, r: 15742.1 },
        { x: 137068.8, y: 31.2, r: 24818.4 },
        { x: 130088.7, y: 35.7, r: 74719.8 },
        { x: 115101.9, y: 9.2, r: 6165.2 },
        { x: 95988.3, y: 45.4, r: 25498.8 },
      ],

      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Target",
      data: [
        { x: 1, y: 3, r: 5 },
        { x: 1.5, y: 3, r: 5 },
        { x: 2, y: 3, r: 5 },
        { x: 2.5, y: 3, r: 5 },
        { x: 3, y: 3, r: 5 },
        { x: 3.5, y: 3, r: 5 },
        { x: 4, y: 3, r: 5 },
        { x: 4.5, y: 3, r: 5 },
        { x: 5, y: 3, r: 5 },
      ],
      backgroundColor: "#A9A8A6",
    },
  ],
};

export default function App() {
  return <Bubble options={options} data={data} />;
}
