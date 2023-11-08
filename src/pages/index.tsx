import React from "react";
import BubbleChartComponent from "../components/BubbleChart";
import BubbleChartTwoComponent from "../components/BubbleChartTwo";
import CustomBubbleChart from "@/components/CustomBubbleChart";
import ChartBubbleChart from "@/components/BubbleRechart";

const data = [
  { value: 10 },
  { value: 20 },
  { value: 30 },
  { value: 40 },
  { value: 50 },
];

const Index = () => {
  return (
    <div>
      {/* <BubbleChartComponent /> */}
      {/* <BubbleChartTwoComponent /> */}
      {/* <CustomBubbleChart data={data} /> */}
      <ChartBubbleChart />
    </div>
  );
};

export default Index;
