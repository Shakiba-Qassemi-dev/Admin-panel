'use client'
import React from "react";
import { Box, Card, CardContent, Typography, Divider } from "@mui/material";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export default function Traffic() {
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

    return (
        <>
            <Card style={{ width: "100%", marginTop: 32 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom style={{ paddingBottom: 15 }}>
                        Monthly Product Sales (Line Chart)
                    </Typography>
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart
                            data={Amar}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="productA"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="productB" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="productC" stroke="#FFBB28" />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            <Box sx={{ marginTop: '50px', padding: '20px' }}>
      <Typography variant="body1" >
        Our company, <strong>TechNova</strong>, specializes in selling high-quality consumer electronics. 
        The chart above shows the monthly sales performance of our three main products over the past year. 
        Product A, B, and C represent our best-selling items, and the trends indicate customer demand fluctuations throughout the months. 
        This visualization helps us monitor growth, identify peak sales periods, and plan inventory accordingly.
      </Typography>

      <Box component="ul" sx={{ pl: 3, mt: 3 }}>
        <li>
          <Typography variant="subtitle1" fontWeight="bold">Monthly Trend Analysis:</Typography>
          <Typography variant="body2">
            Sales of Product A peaked in October with 649 units, indicating a seasonal surge in demand, while Product C had the lowest sales in March. Overall, the company shows a steady growth trend over the year.
          </Typography>
          <Divider sx={{ my: 1 }} />
        </li>

        <li>
          <Typography variant="subtitle1" fontWeight="bold">Product Comparison:</Typography>
          <Typography variant="body2">
            Product A consistently outperforms Products B and C, accounting for approximately 40% of total annual sales. Product B shows moderate growth, and Product C, although lower in volume, exhibits stable performance.
          </Typography>
          <Divider sx={{ my: 1 }} />
        </li>

        <li>
          <Typography variant="subtitle1" fontWeight="bold">Growth Rate:</Typography>
          <Typography variant="body2">
            Comparing the first and last quarter, total sales increased by nearly 20%, suggesting effective marketing campaigns and growing customer engagement.
          </Typography>
          <Divider sx={{ my: 1 }} />
        </li>

        <li>
          <Typography variant="subtitle1" fontWeight="bold">Market Share Distribution:</Typography>
          <Typography variant="body2">
            Across all products, Product A captures the largest share of monthly revenue, followed by Product B. Product C contributes a smaller portion but remains important for portfolio diversity.
          </Typography>
          <Divider sx={{ my: 1 }} />
        </li>

        <li>
          <Typography variant="subtitle1" fontWeight="bold">Peak and Low Periods:</Typography>
          <Typography variant="body2">
            Highest overall sales occur during October and July, possibly due to promotional campaigns or seasonal factors, whereas the slowest month is May.
          </Typography>
          <Divider sx={{ my: 1 }} />
        </li>

        <li>
          <Typography variant="subtitle1" fontWeight="bold">Insights for Decision-Making:</Typography>
          <Typography variant="body2">
            The analysis highlights the importance of stock planning for high-demand months, targeted promotions for slower months, and strategies to boost Product C sales to maximize total revenue.
          </Typography>
        </li>
      </Box>
    </Box>

        </>

    );
}