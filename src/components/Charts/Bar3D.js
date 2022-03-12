import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const chartComponent = ({ data }) => {
  const chartConfigs = {
    type: "bar2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked",
        theme: "fusion",
        paletteColors: "#8a8ebc,#2caeba,#f2c500,#F2726F,#8D6E63",
        yAxisName: "Forks",
        xAxisName: "Repos",
        yAxisNameFontSize: "16px",
        xAxisNameFontSize: "16px",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default chartComponent;
