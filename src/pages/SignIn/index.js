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
import {useNavigate} from 'react-router-dom';
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import theme from "../../components/theme";
import styles from "./styles";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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
export default function SignIn() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email é obrigatório')
      .email('Email invalido'),
    password: Yup.string()
      .required('Senha é obrigatório')
      .min(6, 'Senha deve conter no minimo 6 caracteres')
      .max(40, 'Senha deve conter no máximo 40 caracteres'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = data => {
    JSON.stringify(data, null, 2);
    navigate('/user')
  };
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
        </Card>
        <div
          style={{
            boxShadow: "none",
            bgcolor: "transparent",
            margin: "4.25rem 0px",
            maxWidth: "20rem",
            width:'100%'
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
            Já tem cadastro?
          </Typography>
          <Typography
            sx={{
              color: "#fafafa",
              marginBottom: "1.5rem",
              fontFamily: "Open Sans",
            }}
          >
            Faça seu login e make the change._
          </Typography>
          <div>
            <TextField
              sx={styles.textField}
              fullWidth
              id="email"
              placeholder="E-mail"
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
              {...register('email')}
                error={errors.email ? true : false}
              variant="standard"
            />
            <Typography variant="inherit" color="#fafafa">
                {errors.email?.message}
              </Typography>
            <TextField
              sx={styles.textField}
              fullWidth
              type="password"
              id="password"
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
              {...register('password')}
                error={errors.password ? true : false}
              variant="standard"
            />
            <Typography variant="inherit" color="#fafafa">
                {errors.password?.message}
              </Typography>
          </div>
          <BootstrapButton type="submit" onClick={handleSubmit(onSubmit)}>ENTRAR</BootstrapButton>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop:15 }}>
            <Link
              underline="hover"
              style={{
                fontFamily: "Open Sans",
                color: "rgb(229, 224, 68)",
                fontSize: "16px",
                cursor: "pointer",
                "&:hover": {
                  fontWeight: "bold",
                },
              }}
            >
              Esqueci minha senha
            </Link>
            <Link
              underline="hover"
              style={{
                fontFamily: "Open Sans",
                color: "rgb(35, 221, 122)",
                fontSize: "16px",
                cursor: "pointer",
                "&:hover": {
                  fontWeight: "bold",
                },
              }}
              href="/signup"
            >
              Criar Conta
            </Link>
          </div>
        </div>
      </Paper>
    </Paper>
  );
}
