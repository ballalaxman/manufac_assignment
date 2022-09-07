import React from "react";
import "./App.css";
import Data from "./Winedata";
import ReactEcharts from "echarts-for-react";
function Scatterplot() {
  const colorIntensityData = Data.map((a) => a["Color intensity"]);
  const HueData = Data.map((a) => a.Hue);
  const ScatterPlotData = HueData.map((e, i) => [colorIntensityData[i], e]);

  var option = {
    xAxis: {
      name: "Color intensity", // X Axis label
      nameLocation: "center",
      nameGap: 25,
    },
    yAxis: {
      name: "Hue", // Y axis label
      nameLocation: "center",
      nameGap: 25,
    },
    series: [
      {
        symbolSize: 5, // defines the size of each point
        data: ScatterPlotData, // Filtered data to have only Hue & Color Intensity values and formatted data in way that echarts library wants
        type: "scatter",
      },
    ],
  };

  return (
    <ReactEcharts
      style={{
        height: "400px",
      }}
      option={option}
    />
  );
}

export default Scatterplot;
