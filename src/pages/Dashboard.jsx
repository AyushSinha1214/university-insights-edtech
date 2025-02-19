import { useState } from "react";
import { AppBar, Toolbar, Typography, Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Button, Container, Grid, Paper } from "@mui/material";
import { Menu as MenuIcon, Dashboard as DashboardIcon, School as SchoolIcon, AccountCircle as AccountCircleIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../App.css";

const drawerWidth = 240;

const Dashboard = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {[
          { text: "Dashboard", icon: <DashboardIcon /> },
          { text: "Courses", icon: <SchoolIcon /> },
          { text: "Profile", icon: <AccountCircleIcon /> },
        ].map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button onClick={handleLogout}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { width: drawerWidth } }}
        >
          {drawer}
        </Drawer>
        <Drawer variant="permanent" sx={{ display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { width: drawerWidth } }} open>
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Container>
          <Typography variant="h4" gutterBottom>Welcome Back!</Typography>
          <Grid container spacing={3}>
            {/* Cards */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} className="dashboard-card">
                <Typography variant="h6">Total Students</Typography>
                <Typography variant="h4">1,245</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} className="dashboard-card">
                <Typography variant="h6">Courses Enrolled</Typography>
                <Typography variant="h4">12</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} className="dashboard-card">
                <Typography variant="h6">Performance</Typography>
                <Typography variant="h4">87%</Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Logout Button */}
          <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ marginTop: 3 }}>
            Logout
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
