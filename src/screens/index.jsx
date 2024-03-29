import { useState } from "react";
import { Container, Stack, TextField, Button, Typography } from "@mui/material";
import LogoImg from "../assets/logo.png";
import ImageEL from "../components/utilis/ImageEL";

const initForm = {
  email: "",
  password: "",
};
const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState(initForm);
  const authText = isLogin
    ? "Do not have an account?"
    : "Already have an account?";

  const handleChange = (event) =>
    setForm((oldForm) => ({
      ...oldForm,
      [event.target.name]: event.target.value,
    }));

  const handleAuth = async () => {};

  return (
    <Container
      className="logo"
      maxWidth="xs"
      sx={{
        mt: 10,
      }}
    >
      <Stack mb={6} spacing={4} alignItems="center" textAlign="center">
        <ImageEL src={LogoImg} alt="flowboard" />
        <Typography color="rgba(255, 255, 255, 0.6)">
          Visualize Your Workflow for Increased Productivity. <br />
          Access Your Tasks Anytime, Anywhere
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <TextField
          value={form.email}
          name="email"
          onChange={handleChange}
          label="Email"
        />
        <TextField
          value={form.password}
          name="password"
          onChange={handleChange}
          label="Password"
        />
        <Button
          disabled={!form.email.trim() || !form.password.trim()}
          onClick={handleAuth}
          size="large"
          variant="contained"
        >
          {isLogin ? "Login" : "Register"}
        </Button>
      </Stack>
      <Typography
        sx={{
          cursor: "pointer",
        }}
        onClick={() => setIsLogin((o) => !o)}
        mt={3}
        textAlign="center"
      >
        {authText}
      </Typography>
    </Container>
  );
};

export default AuthScreen;
