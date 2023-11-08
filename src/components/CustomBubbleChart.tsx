import { useEffect, useRef } from "react";
import * as d3 from "d3";

const BubbleChart = ({ data }: any) => {
  const ref: any = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);

    const width = 500;
    const height = 500;

    const pack = d3.pack().size([width, height]).padding(1.5);

    const root: any = d3.hierarchy({ children: data }).sum((d) => d.value);

    const nodes = pack(root).leaves();

    svg
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .attr("r", (d) => d.r)
      .attr("fill", "steelblue");
  }, [data]);

  return <svg ref={ref} style={{ width: "100%", height: "500px" }} />;
};

export default BubbleChart;
