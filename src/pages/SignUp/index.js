import React from "react";
import {
  Card,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Button,
  styled,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import {ReactComponent as BrasilIcon} from '../../assets/brazil.svg'
import PersonIcon from "@mui/icons-material/Person";
import theme from "../../components/theme";
import styles from "./styles";

const BootstrapButton = styled(Button)({
  margin: "3.3rem auto 2.2rem",
  boxShadow: "none",
  textTransform: "none",
  fontFamily: "Open Sans",
  fontSize: "1rem",
  fontWeight: "bold",
  width: "100%",
  padding: "0.7rem 1.4rem",
  lineHeight: 1,
  color: "#fafafa",
  backgroundColor: "rgb(86, 86, 86)",
  borderRadius: 150,
  "&:hover": {
    backgroundColor: "rgb(134, 71, 173)",
    boxShadow: "0px 0px 45px 1px rgb(134, 71, 173)",
  },
  "&::after": {
    content: `''`,
    position: "absolute",
    width: "105%",
    height: "140%",
    borderRadius: 25,
    border: "1px solid transparent",
    borderColor: "rgb(86, 86, 86)",
  },
});
export default function SignUp() {
  return (
    <Paper theme={theme} sx={styles.body}>
      <Paper sx={styles.root}>
        <Card sx={styles.cardLeft}>
          <div
            style={{
              height: "0.5rem",
              background:
                "linear-gradient(270deg, rgb(50, 33, 78) -3.55%, rgb(135, 71, 175) 100.21%)",
              width: "100%",
              maxWidth: "6rem",
              borderRadius: "1rem",
            }}
          />
          <Typography sx={styles.leftTitle}>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Typography>
          <Link
            underline="hover"
            href="/signIn"
            sx={{
              fontFamily: "Open Sans",
              fontWeight: "bold",
              color: "#8647ad",
              marginTop: "1rem",
              [theme.breakpoints.down("lg")]: {
                display: "none",
              },
            }}
          >
            VOLTAR PARA LOGIN
          </Link>
        </Card>
        <div
          style={{
            boxShadow: "none",
            bgcolor: "transparent",
            margin: "4.25rem 0px",
            maxWidth: "20rem",
          }}
        >
          <Card sx={styles.cardRight} />
          <Typography
            sx={{
              margin: "0.6em 0px",
              color: "#fafafa",
              fontSize: "2rem",
              fontFamily: "Open Sans",
            }}
          >
            Comece agora grátis
          </Typography>
          <Paper sx={{ bgcolor: "transparent", boxShadow: "none" }}>
            <Typography
              sx={{
                color: "#fafafa",
                marginBottom: "1.5rem",
                fontFamily: "Open Sans",
              }}
            >
              Crie sua conta e make the change._
            </Typography>
            <TextField
              sx={styles.textField}
              fullWidth
              id="input-with-icon-textfield"
              placeholder="Nome completo"
              InputProps={{
                // style: { color: "#fafafa" },
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon
                      sx={{ color: "rgb(135, 71, 175)", height: "16px" }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              sx={styles.textField}
              fullWidth
              id="input-with-icon-textfield"
              placeholder="Seu melhor @e-mail"
              InputProps={{
                // style: { color: "#fafafa" },
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon
                      sx={{ color: "rgb(135, 71, 175)", height: "16px" }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              sx={styles.textField}
              fullWidth
              id="input-with-icon-textfield"
              placeholder="Celular ex: (11)96123-4567"
              InputProps={{
                // style: { color: "#fafafa" },
                startAdornment: (
                  <InputAdornment position="start">
                    <BrasilIcon
                      sx={{ color: "rgb(135, 71, 175)", height: "16px", width:'20px' }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              sx={styles.textField}
              fullWidth
              id="input-with-icon-textfield"
              placeholder="Senha"
              InputProps={{
                // style: { color: "#fafafa" },
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon
                      sx={{ color: "rgb(135, 71, 175)", height: "16px" }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <BootstrapButton>CRIAR MINHA CONTA GRÁTIS</BootstrapButton>
            <Typography
              sx={{ color: "#fafafa", fontSize: "0.8rem", margin: "0.6em 0px" }}
            >
              Ao clicar em "criar minha conta grátis", declaro que aceito as{" "}
              <Link underline="hover" sx={{ color: "#8647ad" }}>
                Políticas de Privacidade
              </Link>{" "}
              e os{" "}
              <Link underline="hover" sx={{ color: "#8647ad" }}>
                Termos de Uso
              </Link>{" "}
              da DIO.
            </Typography>
          </Paper>
          <Typography
            sx={{
              color: "#fafafa",
              marginTop: "2.2rem",
              marginBottom: "2.2rem",
            }}
          >
            Já tenho conta.{" "}
            <Link
              underline="hover"
              href="/signIn"
              sx={{ color: "rgb(35, 221, 122)" }}
            >
              Fazer login
            </Link>
          </Typography>
          <Link
            underline="hover"
            href="/signIn"
            sx={{
              fontFamily: "Open Sans",
              fontWeight: "bold",
              color: "#8647ad",
              [theme.breakpoints.up("lg")]: {
                display: "none",
              },
            }}
          >
            VOLTAR PARA LOGIN
          </Link>
        </div>
      </Paper>
    </Paper>
  );
}
