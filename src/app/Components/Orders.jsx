'use client'
import React from 'react'
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StoreIcon from "@mui/icons-material/Store";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
const rows = [
  { name: "John Carter", email: "john.carter@example.com", amount: "$120.50", percent: "34%" },
  { name: "Emma Watson", email: "emma.watson@example.com", amount: "$89.99", percent: "26%" },
  { name: "Michael Smith", email: "michael.smith@example.com", amount: "$230.10", percent: "52%" },
  { name: "Sarah Adams", email: "sarah.adams@example.com", amount: "$44.90", percent: "12%" },
  { name: "David Johnson", email: "david.johnson@example.com", amount: "$154.75", percent: "41%" },
  { name: "Emily Davis", email: "emily.davis@example.com", amount: "$62.00", percent: "18%" },
];

function OrderFn() {
  return (
    <Paper sx={{ width: "100%", marginTop: 4, padding: 2 }}>
      <Typography variant="h5" sx={{ pb: 2 }}>
        Users Purchase Table
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Purchase Amount</b></TableCell>
              <TableCell><b>Purchase %</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.percent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
////////////////////////////////
const stats = [
  {
    title: "Total Sales",
    value: "$45,200",
    change: "+12%",
    icon: <MonetizationOnIcon sx={{ fontSize: 40, color: "#4caf50" }} />,
    up: true,
  },
  {
    title: "New Users",
    value: "3,260",
    change: "+8%",
    icon: <GroupsIcon sx={{ fontSize: 40, color: "#2196f3" }} />,
    up: true,
  },
  {
    title: "Orders",
    value: "1,540",
    change: "-5%",
    icon: <ShoppingCartIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
    up: false,
  },
  {
    title: "Active Stores",
    value: "182",
    change: "+3%",
    icon: <StoreIcon sx={{ fontSize: 40, color: "#9c27b0" }} />,
    up: true,
  },
  {
    title: "Active items",
    value: "190",
    change: "+10%",
    icon: <StoreIcon sx={{ fontSize: 40, color: "#9c27b0" }} />,
    up: true,
  },
  
];
function StateCard() {
  return (
    <Grid container spacing={2} mt={2}>
      {stats.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="h4" fontWeight="bold" mt={1}>
                    {item.value}
                  </Typography>

                  <Box display="flex" alignItems="center" mt={1}>
                    {item.up ? (
                      <TrendingUpIcon sx={{ color: "green", marginRight: 1 }} />
                    ) : (
                      <TrendingDownIcon sx={{ color: "red", marginRight: 1 }} />
                    )}

                    <Typography
                      variant="body2"
                      sx={{ color: item.up ? "green" : "red" }}
                    >
                      {item.change}
                    </Typography>
                  </Box>
                </Box>

                <Box>{item.icon}</Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default function Orders() {
  return (
    <>
      <OrderFn />
      <StateCard />
    </>

  )

}