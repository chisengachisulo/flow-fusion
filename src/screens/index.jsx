import {
  Container,
  Stack,
  OutlinedInput,
  Button,
  Typography,
} from "@mui/material";
import LogoImg from "../assets/logo.png";

const AuthScreen = () => {
  return (
    <Container className="logo">
      <img src={LogoImg} alt="flowboard" />
    </Container>
  );
};

export default AuthScreen;
