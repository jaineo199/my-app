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
    {
      label: "CPP",
      data: [
        { x: 1842733.3, y: 0.2, r: 4582.8 },
        { x: 642733.3, y: 2.2, r: 6382.8 },
        { x: 2342733.3, y: 3.2, r: 7682.8 },
        { x: 3242733.3, y: 4.2, r: 452.8 },
        { x: 1742733.3, y: 0.2, r: 4582.8 },
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: "Revenue",
    //   data: [
    //     { x: 1, y: 1, r: 5 },
    //     { x: 2, y: 2, r: 10 },
    //     { x: 3, y: 3.2, r: 15 },
    //     { x: 4, y: 4, r: 20 },
    //     { x: 5, y: 5, r: 25 },
    //   ],
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
    // {
    //   label: "Target",
    //   data: [
    //     { x: 1, y: 3, r: 5 },
    //     { x: 1.5, y: 3, r: 5 },
    //     { x: 2, y: 3, r: 5 },
    //     { x: 2.5, y: 3, r: 5 },
    //     { x: 3, y: 3, r: 5 },
    //     { x: 3.5, y: 3, r: 5 },
    //     { x: 4, y: 3, r: 5 },
    //     { x: 4.5, y: 3, r: 5 },
    //     { x: 5, y: 3, r: 5 },
    //   ],
    //   backgroundColor: "#A9A8A6",
    // },
  ],
};

export default function App() {
  return <Bubble options={options} data={data} />;
}
