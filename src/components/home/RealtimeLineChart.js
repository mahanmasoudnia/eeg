import React from "react";
import Chart from "react-apexcharts";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const options = {
    chart: {
      zoom: {
        enabled: false
      },
      animations: {
        easing: "linear",
        dynamicAnimation: {
          speed: 1000
        }
      }
    },
    tooltip: {
      x: {
        format: "yyyy/MM/dd HH:mm:ss.f"
      }
    },
    xaxis: {
      type: "datetime",
      range: props.range
    },
    yaxis: {
      labels: {
        formatter: val => val.toFixed(0)
      },
      title: { text: "Value" }
    }
  };
  return <Chart className="chart" height={150} width={500} type="line" options={options} series={props.dataList} />;
};
