import React from "react";
import { Grid } from "@mui/material";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

export default function Piechaart() {
  const data01 = [
    {
      name: "ashu",
      value: 2,
    },
    {
      name: "parri",
      value: 4,
    },
  ];
  const data02 = [
    {
      name: "shivam",
      value: 1,
    },
    {
      name: "sagar",
      value: 2,
    },
  ];

  return (
    <Grid bgcolor="white" pt={3} borderRadius={3} mt={3} container item>
      <ResponsiveContainer borderRadius={2} height={450} width="97%">
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </Grid>
  );
}
