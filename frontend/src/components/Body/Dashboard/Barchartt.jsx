import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
  Legend,
} from "recharts";

export default function Barchartt() {
  const buildings = useSelector((state) => state.buildingReducer);
  const tenants = useSelector((state) => state.tenantReducer);

  const data =
    "success" in buildings &&
    buildings.success.map((building) => {
      const dueRent =
        "success" in tenants &&
        tenants.success.filter(
          (tenant) =>
            building._id == tenant.buildingId && tenant.paymentStatus == "Due"
        );
      return {
        name: building.buildingName,
        RentDues: dueRent.length,
      };
    });

  return (
    <Grid bgcolor="white" pt={3} borderRadius={3} mt={3} container item>
      <ResponsiveContainer borderRadius={2} height={450} width="97%">
        <BarChart barSize={33} data={data} barCategoryGap="1%">
          <CartesianGrid vertical={false} opacity={0.2} />

          <XAxis axisLine={false} dataKey="name" />

          <YAxis axisLine={false} dataKey="RentDues" />

          <Tooltip cursor={{ fill: "#ffffff " }} />

          <Legend />

          <Bar
            isAnimationActive={true}
            animationBegin={1000}
            animationDuration={4000}
            animationEasing="ease"
            fill="#1976d2"
            dataKey="RentDues"
            radius={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
}
