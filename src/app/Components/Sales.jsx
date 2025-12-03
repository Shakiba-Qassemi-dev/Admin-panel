'use client'
import React from 'react'
import { Card, CardContent, Typography ,Grid ,Box } from "@mui/material";
import {
  AreaChart,
  Area,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

const charts = [
  {
    title: "Product A Breakdown",
    data: [
      { name: "Online", value: 400 },
      { name: "Retail", value: 300 },
      { name: "Wholesale", value: 150 },
      { name: "Other", value: 50 },
    ],
    colors: ["#8884d8", "#82ca9d", "#FFBB28", "#FF6B6B"],
  },
  {
    title: "Product B Breakdown",
    data: [
      { name: "Online", value: 280 },
      { name: "Retail", value: 320 },
      { name: "Wholesale", value: 200 },
      { name: "Other", value: 100 },
    ],
    colors: ["#4D79FF", "#00C49F", "#FFBB28", "#FF7A7A"],
  },
  {
    title: "Product C Breakdown",
    data: [
      { name: "Online", value: 520 },
      { name: "Retail", value: 140 },
      { name: "Wholesale", value: 200 },
      { name: "Other", value: 140 },
    ],
    colors: ["#6A5ACD", "#20C997", "#F6C85F", "#FF8A65"],
  },
  {
    title: "Product D Breakdown",
    data: [
      { name: "Online", value: 150 },
      { name: "Retail", value: 450 },
      { name: "Wholesale", value: 220 },
      { name: "Other", value: 80 },
    ],
    colors: ["#7B68EE", "#66BB6A", "#FFD54F", "#EF6C00"],
  },
];

// label سفارشی: نام و درصد برای هر اسلایس
const renderCustomizedLabel = (entry, index, percent) => {
  // percent مقدار بین 0 و 1
  return `${entry.name} ${(percent * 100).toFixed(0)}%`;
};


function RadialBarChartactive(){
    
  return (
    <Grid container spacing={3} mt={2}>
      {charts.map((chart, idx) => {
        // محاسبه کل برای درصد محوری (در tooltip یا مرکز)
        const total = chart.data.reduce((s, e) => s + e.value, 0);

        return (
          <Grid item xs={12} sm={6} md={6} key={idx}>
            <Card sx={{ height: 420 }}>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  {chart.title}
                </Typography>

                <Box sx={{ height: 330 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      {/* لایه خاکستری پس‌زمینه برای اینکه جای خالی دیده بشه */}
                      <Pie
                        data={[{ name: "full", value: total }]}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={52}
                        outerRadius={72}
                        fill="#f0f0f0"
                        isAnimationActive={false}
                        startAngle={90}
                        endAngle={-270}
                      />

                      {/* داده اصلی با gap و rounded corners */}
                      <Pie
                        data={chart.data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={52}
                        outerRadius={72}
                        paddingAngle={6}     /* فاصله بین اسلایس‌ها */
                        cornerRadius={10}    /* گوشه‌های گرد */
                        startAngle={90}
                        endAngle={-270}
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {chart.data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={chart.colors[index % chart.colors.length]} />
                        ))}
                      </Pie>

                      <Tooltip
                        formatter={(value, name) => [`${value}`, `${name}`]}
                      />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
///////////////////////////////////
const Amar = [
    { month: "Jan", productA: 400, productB: 240, productC: 100 },
    { month: "Feb", productA: 300, productB: 139, productC: 200 },
    { month: "Mar", productA: 200, productB: 980, productC: 150 },
    { month: "Apr", productA: 278, productB: 390, productC: 220 },
    { month: "May", productA: 189, productB: 480, productC: 300 },
    { month: "Jun", productA: 239, productB: 380, productC: 180 },
    { month: "Jul", productA: 349, productB: 430, productC: 250 },
    { month: "Aug", productA: 300, productB: 980, productC: 320 },
    { month: "Sep", productA: 249, productB: 240, productC: 210 },
    { month: "Oct", productA: 649, productB: 580, productC: 400 },
    { month: "Nov", productA: 239, productB: 380, productC: 180 },
    { month: "Dec", productA: 449, productB: 430, productC: 300 },
  ];

  function SalesStackedAreaChart(){
    return (
        <Card style={{ width: "100%", marginTop: 32 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom style={{ paddingBottom: 15 }}>
              Monthly Product Sales
            </Typography>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart
                data={Amar}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="productA"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="productB"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="productC"
                  stackId="1"
                  stroke="#FFBB28"
                  fill="#FFBB28"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      );
    }

export default function Sales() {
    return (
        <>
          <RadialBarChartactive />
          <SalesStackedAreaChart />
        </>
      );
   
}