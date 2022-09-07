import React from "react";
import "./App.css";
import Data from "./Winedata";
import ReactEcharts from "echarts-for-react";
function Scatterplot() {
  const colorIntensityData = Data.map((a) => a["Color intensity"]);
  const HueData = Data.map((a) => a.Hue);
  const combine = HueData.map((e, i) => [colorIntensityData[i], e]);

  var option = {
    xAxis: {
      name: "Color intensity",
      nameLocation: "center",
      nameGap: 25,
    },
    yAxis: {
      name: "Hue",
      nameLocation: "center",
      nameGap: 25,
    },
    series: [
      {
        symbolSize: 5,
        data: combine,
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
