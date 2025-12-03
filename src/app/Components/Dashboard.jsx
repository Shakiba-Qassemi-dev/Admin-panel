import React from 'react'
import Box from '@mui/material/Box';
import { Card, CardContent, Typography,Grid,Badge } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PaidIcon from '@mui/icons-material/Paid';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import { PieChart, Pie, Cell } from 'recharts';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    BarChart,
    Bar,
    ComposedChart,
    Area,
    Line,
} from 'recharts';

const dashboardCards = [
    {
      title: "Total Sales",
      badgeContent: "Today",
      description: "Track your daily sales and monitor overall revenue performance.",
      change: 2.56, // درصد مثبت
      icon: <ShoppingCartIcon fontSize="large" color="primary" />,
    },
    {
      title: "Sales Trends",
      badgeContent: "Weekly",
      description: "Analyze weekly trends to identify growth opportunities and potential challenges.",
      change: 1.75,
      icon: <TrendingUpIcon fontSize="large" color="success" />,
    },
    {
      title: "Product Performance",
      badgeContent: "Top",
      description: "See which products are performing best and optimize your inventory.",
      change: 3.12,
      icon: <StorefrontIcon fontSize="large" color="warning" />,
    },
    {
      title: "Customer Insights",
      badgeContent: "New",
      description: "Understand customer purchasing patterns and improve marketing strategies.",
      change: -0.98, // درصد منفی
      icon: <PeopleIcon fontSize="large" color="info" />,
    },
    {
        title: "Total Sales",
        badgeContent: "Today",
        description: "Track your daily sales and monitor overall revenue performance.",
        change: 2.56, // درصد مثبت
        icon: <ShoppingCartIcon fontSize="large" color="primary" />,
      },
      {
        title: "Customer Insights",
        badgeContent: "New",
        description: "Understand customer purchasing patterns and improve marketing strategies.",
        change: -0.98, // درصد منفی
        icon: <PeopleIcon fontSize="large" color="info" />,
      },
      
  ];
  
  const SelectActionCard = () => {
    return (
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          {dashboardCards.map((card, index) => {
            const isPositive = card.change >= 0;
            return (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2,
                    height: 220,
                    width:300, // ارتفاع ثابت کارت
                    justifyContent: 'space-between', // فاصله متوازن بین آیتم‌ها
                  }}
                >
                  <Badge badgeContent={card.badgeContent} color="error" sx={{ mb: 1 }}>
                    {card.icon}
                  </Badge>
                  <Typography variant="h6" sx={{ mt: 1, mb: 1, textAlign: 'center' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 1 }}>
                    {card.description}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="center"
                    sx={{ color: isPositive ? 'success.main' : 'error.main' }}
                  >
                    {isPositive ? `Increased By ${card.change}% ↑` : `Decreased By ${Math.abs(card.change)}% ↓`}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  };
///////////////////////////////////////////
const salesData = [
    {
      title: "Overview",
      badgeContent: "New",
      description: "Get a comprehensive view of your sales performance, track revenue trends, and monitor key metrics in real-time.",
    },
    {
      title: "Sales Trends",
      badgeContent: "Hot",
      description: "Analyze daily, weekly, and monthly sales trends to identify growth opportunities and potential challenges.",
    },
    {
      title: "Product Performance",
      badgeContent: "Top",
      description: "See which products are performing best and make data-driven decisions to optimize your inventory and promotions.",
    },
    {
      title: "Customer Insights",
      badgeContent: "Info",
      description: "Understand customer purchasing patterns and preferences to improve marketing strategies and boost engagement.",
    },
    {
      title: "Reports & Analytics",
      badgeContent: "Pro",
      description: "Generate detailed reports on sales, revenue, and customer behavior to make informed business decisions.",
    },
  
  ];
  
  const SalesAnalysisPanel = () => {
    return (
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3} >
          {salesData.map((item, index) => (
            <Grid item xs={12} md={6} key={index} sx={{width:'100%'}}>
              <Card>
                <CardContent>
                  <Badge color="primary" badgeContent={item.badgeContent} sx={{ mb: 2 }}>
                    <Typography variant="h6">{item.title}</Typography>
                  </Badge>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
///////////////////////////////////////////
const mydata = [
    { name: 'Jan', New: 4000, Old: 2400 },
    { name: 'Feb', New: 3000, Old: 1398 },
    { name: 'Mar', New: 2000, Old: 9800 },
    { name: 'Apr', New: 3780, Old: 3908 },
    { name: 'May', New: 1890, Old: 4800 },
    { name: 'Jun', New: 2390, Old: 2400 },
    { name: 'Jul', New: 3490, Old: 4300 },
    { name: 'Agu', New: 3000, Old: 9800 },
    { name: 'Sep', New: 2490, Old: 2400 },
    { name: 'Oct', New: 6490, Old: 5800 },
    { name: 'Nov', New: 2390, Old: 3800 },
    { name: 'Des', New: 4490, Old: 4300 },
];

const BarChartCard = () => {
    return (
        <Card sx={{ width: '100%', marginTop: 8 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom py="15px">
                    Website Views
                </Typography>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart
                        data={mydata}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Old" stackId="a" fill="#e51b2c" />
                        <Bar dataKey="New" stackId="a" fill="#f7f97a" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};
///////////////////////////////

const PlatformPieChart = () => {
    const pieData = [
        { name: 'Android', value: 4000 },
        { name: 'iOS', value: 3000 },
        { name: 'Windows', value: 2000 },
        { name: 'Other', value: 1000 },
    ];

    const COLORS = ['#3DDC84', '#3ccaf2', '#ae1ee8', '#FFBB28'];

    return (
        <Card style={{ width: '100%', marginTop: 32 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom style={{ paddingBottom: 15 }}>
                    Platform Distribution
                </Typography>
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            label={({ name, percent }) => `${name}: ${Math.round(percent * 100)}%`}
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value} users`} />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};
///////////////////////////////////////
const data = [
    { month: "Jan", sales: 4000, orders: 2400, profit: 1200 },
    { month: "Feb", sales: 3000, orders: 2210, profit: 1100 },
    { month: "Mar", sales: 2000, orders: 2290, profit: 900 },
    { month: "Apr", sales: 2780, orders: 2000, profit: 1300 },
    { month: "May", sales: 1890, orders: 2181, profit: 800 },
    { month: "Jun", sales: 2390, orders: 2500, profit: 1500 },
    { month: "Jul", sales: 3490, orders: 2100, profit: 1700 },
  ];
function SalesBarChart() {
    return(
    <Card style={{ width: "100%", marginTop: 32 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Composed Chart With Axis Labels
        </Typography>

        <ResponsiveContainer width="100%" height={380}>
          <ComposedChart data={data}>
            <CartesianGrid stroke="#f5f5f5" />

            <XAxis
              dataKey="month"
              label={{ value: "Months", position: "insideBottom", offset: -5 }}
            />

            <YAxis
              label={{
                value: "Sales / Orders / Profit",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <Tooltip />
            <Legend />

            {/* Area */}
            <Area type="monotone" dataKey="profit" fill="#e51b2c" stroke="#82ca9d" />

            {/* Bar */}
            <Bar dataKey="orders" barSize={20} fill="#f7f97a" />

            {/* Line */}
            <Line type="monotone" dataKey="sales" stroke="#FF8042" strokeWidth={3} />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}


export default function App() {

    return (
        <>
            <SelectActionCard />
            <BarChartCard />
            <SalesAnalysisPanel/>
            <PlatformPieChart />
            <SalesBarChart />
        </>
    )
}
