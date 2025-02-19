import { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("auth", "true");
    navigate("/dashboard");
  };

  return (
    <Container maxWidth="sm">
      <Box className="auth-container">
        <Typography variant="h4" align="center">Sign Up</Typography>
        <form onSubmit={handleRegister}>
          <TextField fullWidth margin="normal" label="Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <TextField fullWidth margin="normal" label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth margin="normal" label="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" variant="contained" color="primary" fullWidth>Sign Up</Button>
          <Typography align="center">
            Already have an account? <Link to="/">Login</Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
