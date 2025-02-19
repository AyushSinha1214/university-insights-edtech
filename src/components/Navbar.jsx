import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          University Insights
        </Typography>
        <Button color="inherit" component={Link} to="/">Login</Button>
        <Button color="inherit" component={Link} to="/register">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
