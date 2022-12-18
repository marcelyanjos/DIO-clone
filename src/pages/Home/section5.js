import React from "react";
import { Paper, styled, Card, Typography } from "@mui/material";
import theme from "../../components/theme";
import { ReactComponent as Icon1 } from "../../assets/HomeAssets/Icons/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/HomeAssets/Icons/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/HomeAssets/Icons/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/HomeAssets/Icons/icon4.svg";
import { ReactComponent as Icon5 } from "../../assets/HomeAssets/Icons/icon5.svg";
import { ReactComponent as Icon6 } from "../../assets/HomeAssets/Icons/icon6.svg";
import styles from "./styles";

export default function Section5() {
  return (
    <Paper sx={styles.section5} theme={theme}>
      <Card sx={styles.body5}>
        <Card
          sx={{
            color: "#fafafa",
            boxShadow: "none",
            bgcolor: "transparent",
            [theme.breakpoints.up("xl")]: {
              p: 4,
            },
            [theme.breakpoints.down("xl")]: {
              // width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Typography
            sx={{
              // fontFamily: "Open Sans",
              fontSize: "2rem",
              fontWeight: "bold",

              margin: "0.6em 0px",
              [theme.breakpoints.up("xl")]: {
                textAlign: "left",
                maxWidth: "18.75rem",
              },
              [theme.breakpoints.down("xl")]: {
                textAlign: "center",
              },
              [theme.breakpoints.down("md")]: {
                textAlign: "center",
              },
              lineHeight: 1.2,
            }}
          >
            Junte-se ao nosso ecossistema e transforme o mundo com a gente!
          </Typography>
          <div
            style={{
              width: "6rem",
              height: "0.5rem",
              borderRadius: "1rem",
              background:
                "linear-gradient(270deg, rgb(50, 33, 78) -3.55%, rgb(135, 71, 175) 100.21%)",
            }}
          />
        </Card>
        <Card
          sx={styles.grid5}>
          <Card
            sx={styles.gridItem5}
          >
            <Icon1 />
            <h1 style={styles.h1}>+1000000</h1>
            <p style={styles.p}>Devs na comunidade</p>
          </Card>
          <Card
            sx={styles.gridItem5}
          >
            <Icon2 />
            <h1 style={styles.h1}>+40</h1>
            <p style={styles.p}>Empresas em busca de talentos</p>
          </Card>
          <Card
            sx={styles.gridItem5}
          >
            <Icon3 />
            <h1 style={styles.h1}>200</h1>
            <p style={styles.p}>Campos educacionais parceiros</p>
          </Card>
          <Card
            sx={styles.gridItem5}
          >
            <Icon4 />
            <h1 style={styles.h1}>15</h1>
            <p style={styles.p}>Países alcançados</p>
          </Card>
          <Card
            sx={styles.gridItem5}
          >
            <Icon5 />
            <h1 style={styles.h1}>65</h1>
            <p style={styles.p}>Programas sociais apoiados</p>
          </Card>
          <Card
            sx={styles.gridItem5}
          >
            <Icon6 />
            <h1 style={styles.h1}>1000000</h1>
            <p style={styles.p}>Bolsas de estudos já distribuidas</p>
          </Card>
        </Card>
      </Card>
    </Paper>
  );
}
