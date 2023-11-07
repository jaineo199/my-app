import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function generateData(baseval: any, count: any, yrange: any) {
  let i = 0;
  let series = [];

  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000; // Increment baseval by a day
    i++;
  }

  return series;
}

export default function ExampleChart() {
  const option: any = {
    series: [
      {
        name: "Bubble1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Bubble2",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
        style: {
          fill: "#ff0000",
          stroke: "#000000",
          strokeWidth: 1,
        },
      },
      {
        name: "Bubble3",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
        style: {
          fill: "#ff0000",
          stroke: "#000000",
          strokeWidth: 1,
        },
      },
      {
        name: "Bubble4",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
        style: {
          fill: "#ff0000",
          stroke: "#000000",
          strokeWidth: 1,
        },
      },
    ],
    chart: {
      height: 350,
      type: "bubble",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0.8,
    },
    title: {
      text: "Simple Bubble Chart",
    },
    xaxis: {
      tickAmount: 12,
      type: "category",
    },
    yaxis: {
      max: 70,
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  return (
    <>
      <ApexChart type="bubble" options={option} series={series} height={350} />
    </>
  );
}
