import React, { useState, useEffect } from "react";
import { Paper, styled, Card, Typography, Button } from "@mui/material";
import theme from "../../components/theme";
import styles from "./styles";
import ReactTextTransition, { presets } from "react-text-transition";

export default function Section1() {
  const [text, setText] = useState(0);
  const textValues = ["Codifique", "Desenhe", "Programe", "Implemente"];
  const GradientText = styled("span")({
    [theme.breakpoints.up("md")]: {
      fontSize: "56px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
    fontWeight: "bold",
    background:
      "linear-gradient(90.33deg, rgb(166, 75, 214) 0.1%, rgb(227, 18, 96) 55.24%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  });

  const BootstrapButton = styled(Button)({
    marginLeft: 10,
    marginTop: 40,
    boxShadow: "none",
    textTransform: "none",
    fontFamily: "Open Sans",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "0.7rem 1.4rem",
    lineHeight: 1,
    backgroundColor: "#e4105e",
    borderRadius: 150,
    "&:hover": {
      backgroundColor: "#e4105e",
      boxShadow: "0px 0px 45px 1px rgba(228,16,94,1)",
    },
    "&::after": {
      content: `''`,
      position: "absolute",
      width: "110%",
      height: "140%",
      borderRadius: 22,
      border: "1px solid transparent",
      borderColor: "#e4105e",
    },
  });

  useEffect(() => {
    const intervalId = setInterval(
      () => setText((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Paper sx={styles.section1} theme={theme}>
      <Card
        sx={{
          fontFamily: "Open Sans",
          bgcolor: "transparent",
          height: "90%",
          color: "#fafafa",
          p: "1rem",
          boxShadow: "none",
          [theme.breakpoints.up("xl")]: {
            minWidth: "92%",
            pl: 10,
          },
          [theme.breakpoints.down("xl")]: {
            minWidth: "700px",
            maxWidth: "1180px",
            width: "100%",
          },
          [theme.breakpoints.down("md")]: {
            minWidth: 0,
            maxWidth: "769px",
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <ReactTextTransition
          style={{
            marginTop: "15px",
          }}
          springConfig={presets.gentle}
        >
          <GradientText>{textValues[text % textValues.length]}</GradientText>
        </ReactTextTransition>
        <Typography
          sx={{
            [theme.breakpoints.up("md")]: {
              width: "540px",
              fontSize: 56,
              lineHeight: 1.2,
            },
            [theme.breakpoints.down("md")]: {
              fontSize: 30,
              lineHeight: 1.2,
              width: "100%",
            },
            mt: 1,
          fontFamily: "Open Sans",
            fontWeight: "bold",
            wordBreak: "break-all",
          }}
        >
          o seu futuro global agora!
        </Typography>
        <Typography
          sx={{
          fontFamily: "Open Sans",
            [theme.breakpoints.up("md")]: {
              width: "580px",
              mt: 4,
            },
          }}
        >
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do
          mundo e encare seu novo desafio profissional, evoluindo em comunidade
          com os melhores experts.
        </Typography>
        <BootstrapButton variant="contained" disableRipple href="/signIn">
          COMEÇAR AGORA
        </BootstrapButton>
      </Card>
    </Paper>
  );
}
