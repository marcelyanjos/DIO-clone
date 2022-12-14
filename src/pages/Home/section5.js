import React from "react";
import { Paper, styled, Card, Typography } from "@mui/material";
import theme from "../../components/theme";
import { ReactComponent as Icon1 } from "../../assets/HomeAssets/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/HomeAssets/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/HomeAssets/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/HomeAssets/icon4.svg";
import { ReactComponent as Icon5 } from "../../assets/HomeAssets/icon5.svg";
import { ReactComponent as Icon6 } from "../../assets/HomeAssets/icon6.svg";
import styles from "./styles";

export default function Section5() {
  return (
    <Paper sx={styles.section5} theme={theme}>
      <Card
        sx={{
          bgcolor: "transparent",
          height: "90%",
          color: "#fafafa",
          fontFamily: "Open Sans",
          p: "1rem",
          boxShadow: "none",
          [theme.breakpoints.up("xl")]: {
            minWidth: "1250px",
            display: "flex",
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
          },
        }}
      >
        <Card
          sx={{
            color: "#fafafa",
            boxShadow: "none",
            bgcolor: "transparent",
            [theme.breakpoints.up("xl")]: {
              width: "38%",
            p:4,

            },
            [theme.breakpoints.down("xl")]: {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily:'Open Sans',
              fontSize: "2rem",
              fontWeight: "bold",
              [theme.breakpoints.up("xl")]: {
                width: "300px",
              },
              lineHeight: 1.2,
            }}
          >
            Junte-se ao nosso ecossistema e transforme o mundo com a gente!
          </Typography>
          <div
            style={{
              maxWidth: "6rem",
              height: "0.5rem",
              borderRadius: "1rem",
              background:
                "linear-gradient(270deg, rgb(50, 33, 78) -3.55%, rgb(135, 71, 175) 100.21%)",
            }}
          />
        </Card>
        <Card
          sx={{
            display:'grid',
            gridTemplateColumns:'repeat(3, 16.25rem)',
            gridAutoFlow: 'row',
            boxShadow: "none",
            bgcolor: "transparent",
            // width: "60%",
          }}
        >
          <Card
            sx={{
              bgcolor: "transparent",
              color: "#fafafa",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p:4

            }}
          >
            <Icon1 />
            <h1 style={{color:'rgb(35, 221, 122)', height:'10px'}}>+1000000</h1>
            <p style={{width:'200px',  textAlign:'center', height:'40px'}}>Devs na comunidade</p>
          </Card>
          <Card
            sx={{
              bgcolor: "transparent",
              color: "#fafafa",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p:4
            }}
          >
            <Icon2 />
            <h1 style={{color:'rgb(35, 221, 122)', height:'10px'}}>+40</h1>
            <p style={{width:'200px', textAlign:'center', height:'40px'}}>Empresas em busca de talentos</p>
          </Card>
          <Card
            sx={{
              bgcolor: "transparent",
              color: "#fafafa",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p:4
            }}
          >
            <Icon3 />
            <h1 style={{color:'rgb(35, 221, 122)', height:'10px'}}>200</h1>
            <p style={{width:'200px',  textAlign:'center', height:'40px'}}>Campos educacionais parceiros</p>
          </Card>
          <Card
            sx={{
              bgcolor: "transparent",
              color: "#fafafa",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p:4
            }}
          >
            <Icon4 />
            <h1 style={{color:'rgb(35, 221, 122)', height:'10px'}}>15</h1>
            <p style={{width:'200px',  textAlign:'center', height:'40px'}}>Países alcançados</p>
          </Card>
          <Card
            sx={{
              bgcolor: "transparent",
              color: "#fafafa",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p:4
            }}
          >
            <Icon5 />
            <h1 style={{color:'rgb(35, 221, 122)', height:'10px'}}>65</h1>
            <p style={{width:'200px',  textAlign:'center', height:'40px'}}>Programas sociais apoiados</p>
          </Card>
          <Card
            sx={{
              bgcolor: "transparent",
              color: "#fafafa",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p:4
            }}
          >
            <Icon6 />
            <h1 style={{color:'rgb(35, 221, 122)', height:'10px'}}>1000000</h1>
            <p style={{width:'200px',  textAlign:'center', height:'40px'}}>Bolsas de estudos já distribuidas</p>
          </Card>
        </Card>
      </Card>
    </Paper>
  );
}
