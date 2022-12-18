import React from "react";
import {
  Paper,
  Card,
  Typography,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ReactComponent as Playstore } from "../../assets/HomeAssets/Icons/playstore.svg";
import { ReactComponent as Applestore } from "../../assets/HomeAssets/Icons/applestore.svg";
import { ReactComponent as Logo2 } from "../../assets/logo2.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import theme from "../theme";
import styles from "./styles";
export default function Footer() {
  return (
    <Paper sx={styles.body} theme={theme}>
      <Card sx={styles.card}>
        <Card sx={styles.left}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              boxShadow: "none",
              bgcolor: "transparent",
              [theme.breakpoints.up("lg")]: {
                margin: "1rem 2rem",
              },
              [theme.breakpoints.down("lg")]: {
                display: "flex",
                alignItems: "center",
                margin: "1rem 0px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#fafafa",
                fontSize: "1em",
                fontWeight: "bold",
                margin: "0.6em 0px",
              }}
            >
              make the change
            </Typography>
            <Link underline="hover" sx={styles.link}>
              Para Empresas
            </Link>
          </Card>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              boxShadow: "none",
              bgcolor: "transparent",
              [theme.breakpoints.up("lg")]: {
                margin: "1rem 2rem",
              },
              [theme.breakpoints.down("lg")]: {
                display: "flex",
                alignItems: "center",
                margin: "1rem 0px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#fafafa",
                fontSize: "1em",
                fontWeight: "bold",
                margin: "0.6em 0px",
              }}
            >
              Informações
            </Typography>
            <Link underline="hover" sx={styles.link}>
              Central de Ajuda
            </Link>
            <Link underline="hover" sx={styles.link}>
              Termos e Políticas
            </Link>
          </Card>
        </Card>
        <Card sx={styles.right}>
          <Typography
            sx={{
              fontSize: "2em",
              fontWeight: "bold",
              fontFamily:'Open Sans',
              textAlign: "center",
              margin: "0.6em 0px",
              [theme.breakpoints.up("lg")]: {
                maxWidth: "200px",
                lineHeight:1
              },
              [theme.breakpoints.down("lg")]: {
                maxWidth: "180px",
              },
            }}
          >
            Download Grátis
          </Typography>
          <Card
            sx={{
              boxShadow: "none",
              bgcolor: "transparent",
              [theme.breakpoints.down("lg")]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <Button sx={styles.button} href="https://play.google.com/store/apps/details?id=one.digitalinnovation.app">
              <Playstore style={styles.buttonIcon} />
              <Typography
                sx={{
                  textAlign: "start",
                  textTransform: "none",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: 1,
                    fontSize: "0.8rem",
                    fontFamily: "Open Sans",
                  }}
                >
                  Baixar na
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1,
                    fontFamily: "Open Sans",
                    fontWeight: "500",
                  }}
                >
                  Google Play
                </Typography>
              </Typography>
            </Button>
            <Button sx={styles.button} href="https://apps.apple.com/us/app/digital-innovation-one/id1439709522">
              <Applestore style={styles.buttonIcon} />
              <Typography
                sx={{
                  textAlign: "start",
                  textTransform: "none",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: 1,
                    fontSize: "0.8rem",
                    fontFamily: "Open Sans",
                  }}
                >
                  Baixar na
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1,
                    fontFamily: "Open Sans",
                    fontWeight: "500",
                  }}
                >
                  App Store
                </Typography>
              </Typography>
            </Button>
          </Card>
        </Card>
      </Card>
      <Card sx={styles.card2}>
        <Logo2 />
        <Card
          sx={{
            boxShadow: "none",
            bgcolor: "transparent",
            margin: "2rem 0px",
            padding: 0,
            display: "flex",
          }}
        >
              <IconButton
                sx={styles.medias}
                aria-label="linkedin"
                href="https://www.linkedin.com/school/digitalinnovation-one/"
              >
                <LinkedinIcon width='16px' height='16px'/>
              </IconButton>
              <IconButton
                sx={styles.medias}
                aria-label="facebook"
                href="https://pt-br.facebook.com/diomakethechange/"
              >
                <FacebookIcon width='16px' height='16px'/>
              </IconButton>
          <IconButton
            sx={styles.medias}
            aria-label="twitter"
            href="https://twitter.com/dio_me_"
          >
            <TwitterIcon width='16px' height='16px'/>
          </IconButton>
          <IconButton
            sx={styles.medias}
            aria-label="instagram"
            href="https://www.instagram.com/dio_makethechange/"
          >
            <InstagramIcon width='16px' height='16px'/>
          </IconButton>
        </Card>
      </Card>
    </Paper>
  );
}
