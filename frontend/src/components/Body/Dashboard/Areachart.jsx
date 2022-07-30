import { Grid, Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetBuildings } from "../../../Redux/Actions/buildingAction";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Areachart() {
  const dispatch = useDispatch();
  const buildings = useSelector((state) => state.buildingReducer);
  const tenants = useSelector((state) => state.tenantReducer);

  const data =
    "success" in buildings &&
    buildings.success.map((building) => {
      const totalTenants =
        "success" in tenants &&
        tenants.success.filter((tenant) => building._id == tenant.buildingId);
      return {
        name: building.buildingName,
        tenants: totalTenants.length,
      };
    });

  return (
    <Grid bgcolor="white" p={3} borderRadius={3} mt={3} container item>
      <ResponsiveContainer borderRadius={2} height={400} width="97%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1976d2" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#1976d2" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area stroke="#2451B7" dataKey="tenants" fill="url(#color)" />

          <XAxis tickMargin={18} dataKey="name" />

          <YAxis axisLine={false} tickLine={false} dataKey="tenants" />

          <Tooltip />

          <CartesianGrid vertical={false} opacity={0.1} />
        </AreaChart>
      </ResponsiveContainer>
    </Grid>
  );
}
