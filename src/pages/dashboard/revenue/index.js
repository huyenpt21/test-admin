import React from "react";
import { Column } from "@ant-design/plots";
import { dataRevenue } from "../dataChart";

export default function Revenue() {
  const data = dataRevenue;
  const config = {
    data,
    xField: "month",
    yField: "value",
    label: {
      position: "middle",
      style: {
        fill: "#FFF",
        opacity: 1,
      },
    },
  };
  return <Column {...config} />;
}
