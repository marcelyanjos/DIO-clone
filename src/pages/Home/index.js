import React from "react";
import { Paper, styled, Card } from "@mui/material";
import theme from "../../components/theme";
import styles from "./styles";
import Section1 from "./section1";
import Section5 from "./section5";
export default function Home() {
  const GradientText = styled("span")({
    fontSize: "56px",
    fontWeight: "bold",
    fontFamily: "Open Sans",
    background:
      "linear-gradient(90.33deg, rgb(166, 75, 214) 0.1%, rgb(227, 18, 96) 55.24%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  });
  return (
    <div style={styles.body}>
      <Section1 />
      <Paper sx={styles.section2}>
        <Card
          sx={{
            bgcolor: "transparent",
            height: "90%",
            color: "#fafafa",
            p: "1rem",
            boxShadow:'none',
            [theme.breakpoints.up("xl")]: {
              minWidth: "1180px",
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
          <div>
          <GradientText style={{fontSize:'3rem'}}>carreiras</GradientText>
          </div>
        </Card>
      </Paper>
      <Section5 />
    </div>
  );
}
