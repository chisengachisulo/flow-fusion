import { Container, Stack, TextField, Button, Typography } from "@mui/material";
import LogoImg from "../assets/logo.png";
import ImageEL from "../components/utilis/ImageEL";

const AuthScreen = () => {
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
        <TextField label="Email" />
        <TextField label="Password" />
        <Button size="large" variant="contained">
          Login
        </Button>
      </Stack>
      <Typography mt={3} textAlign="center">
        Do not have an account?
      </Typography>
    </Container>
  );
};

export default AuthScreen;
