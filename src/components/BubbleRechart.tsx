import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.defaults.borderColor = "#FFFFFF";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options: any = {
  scales: {
    // x: {
    //   grid: {
    //     display: true,
    //   },
    // },
    // y: {
    //   grid: {
    //     display: true,
    //   },
    // },
  },
};

export const data = {
  datasets: [
    {
      label: "CPP",
      data: [
        { x: 2, y: 4, r: 15 },
        { x: 2, y: 2, r: 10 },
        { x: 3, y: 2.4, r: 15 },
        { x: 4, y: 4, r: 20 },
        { x: 5, y: 5, r: 25 },
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Revenue",
      data: [
        { x: 1, y: 1, r: 5 },
        { x: 2, y: 2, r: 10 },
        { x: 3, y: 3.2, r: 15 },
        { x: 4, y: 4, r: 20 },
        { x: 5, y: 5, r: 25 },
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
