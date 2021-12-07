import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPontsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxmimum = Math.max(...dataPontsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={totalMaxmimum}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
