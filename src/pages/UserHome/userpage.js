import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../components/theme";
export default function Userpage() {
  return (
    <Box
      theme={theme}
      sx={{
        bgcolor: "#15161b",
        color: "#fafafa",
        mt: 8,
        height: "calc(100vh - 5.980rem)",
        display: "flex",
        flexDirection: "space-evenly",
        p: "1rem",
      }}
    >
      <Box
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "25%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          [theme.breakpoints.down("lg")]: {
            width: "100%",
          },
        }}
      >
        <Typography>User</Typography>
      </Box>
      <Box
        sx={{
          [theme.breakpoints.up("lg")]: {
            width: "100%",
            maxWidth: "75%",
            display: "flex",
          },
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.up("lg")]: {
              width: "100%",
              maxWidth: "66.66%",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            },
          }}
        >
            <div style={{ display: "flex", }}>
            <Typography sx={{flexGrow:1}}>FEED</Typography>
            <Box sx={{display:'flex',width:'55%',justifyContent:'space-between'}}>
            <Typography>ARTIGOS</Typography>
            <Typography>TÓPICOS</Typography>
            <Typography>TODOS</Typography>
            </Box>
          </div>
        </Box>
        <Box
          sx={{
            [theme.breakpoints.up("lg")]: {
              width: "100%",
              maxWidth: "33.33%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
            Infos
        </Box>
      </Box>
    </Box>
  );
}
