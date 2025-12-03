'use client'
import React from 'react'
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import { Account } from '@toolpad/core/Account';
import OrdersPage from './Orders';
 import InventoryPage from './Inventory';
import ReportPage from './Reports';
 import Traffic from './Traffic';
import App from './Dashboard';
 import SalesPage from './Sales';
// import AccountPage from './Account';
import PorofilePage from './Profile';


const NAVIGATION = [
  { kind: 'header', title: 'Main items' },
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { segment: 'orders', title: 'Orders', icon: <ShoppingCartIcon /> },
  { kind: 'divider' },
  { kind: 'header', title: 'Analytics' },
  {
    segment: 'reports', title: 'Reports', icon: <BarChartIcon />,
    children: [
      { segment: 'sales', title: 'Sales', icon: <DescriptionIcon /> },
      { segment: 'traffic', title: 'Traffic', icon: <DescriptionIcon /> },
    ],
  },
  { segment: 'inventory', title: 'Inventory', icon: <LayersIcon /> },
  { kind: 'header', title: 'Profile' },
  { segment: 'profile', title: 'Profile', icon: <AccountCircleIcon /> },
];
const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const getContent = (segment) => {
  switch (segment) {
    case '/dashboard':
      return <App />;
    case '/orders':
      return <OrdersPage />;
    case '/reports':
      return <ReportPage />;
    case '/reports/sales':
      return <SalesPage />;
    case '/reports/traffic':
      return <Traffic />;
    case '/inventory':
      return <InventoryPage />;
    case '/profile':
      return <PorofilePage />;
    default:
      return <h2>Select a section from the menu</h2>;
  }
};








export default function Dashboardlayout(props) {
  const { window } = props;
  const demoWindow = window ? window() : undefined;
  const router = useDemoRouter('/dashboard');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredNavigation = NAVIGATION.filter((item) =>
    item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const demoSession = {
    user: {
      name: 'shakiba qassemi',
      email: 'shakibaqassemi@gmail.com',
      image: '/images/1.jpg',
    },
  };

  const authentication = {
    signIn: () => { },
    signOut: () => { },
  };


  return (
    <AppProvider
      navigation={filteredNavigation}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      session={demoSession}
      authentication={authentication}
    >
      <DashboardLayout
        appBarContent={() => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Account />
          </Box>
        )}
        headerContent={
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: 'gray', mr: 1 }} />,
              }}
              sx={{ width: 300 }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>
        }
      >
        <PageContainer>
          {getContent(router.pathname)}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}