import React from "react";
import Data from "./Winedata";
import ReactEcharts from "echarts-for-react";

function Barchart() {
  const Alcoholdata = Data.map((a) => a.Alcohol);
  const malicAcidData = Data.map((a) => a["Malic Acid"]);
  const combine = Alcoholdata.map((e, i) => [e, malicAcidData[i]]);
  console.log(combine);

  var option = {
    xAxis: {
      name: "Alcohol",
      nameLocation: "center",
      boundaryGap: 0.5,
      nameGap: 25,
    },
    yAxis: {
      name: "Malic acid",
      nameLocation: "center",
      boundaryGap: 0.5,
      nameGap: 25,
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        data: combine,
        type: "bar",
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

export default Barchart;
