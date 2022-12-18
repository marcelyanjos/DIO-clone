import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Badge,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Outlet } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../components/theme";
import { ReactComponent as Logo } from "../../assets/logo-dio.svg";
import { ReactComponent as IconPortuguese } from "../../assets/ic-br.svg";
import { ReactComponent as IconSpanish } from "../../assets/ic-en.svg";
import { ReactComponent as IconEnglish } from "../../assets/ic-es.svg";
import CustomizedInputs from "./searchButton";
import styles from "./styles";

// const drawerWidth = 240;
const navItems = ["Home", "Catálogo", "Planos", "Para Empresas"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("pt-br");

  const handleSearch = () => {
    console.log("open");
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={styles.drawer2}>
      <AppBar position="absolute" component="nav" style={styles.appbar}>
        <Toolbar
          style={{
            padding: "0 12px 0 12px",
          }}
        >
          <div
            component="div"
            style={{ flexGrow: 1, display: "flex", alignItems: "flex-start" }}
          >
            <Button
              sx={{
                minHeight: "40px",
                minWidth: "40px",
                [theme.breakpoints.down("lg")]: {
                  backgroundImage: `url('https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                },
              }}
            />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleSearch}
              sx={{
                [theme.breakpoints.up("lg")]: {
                  display: "none",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          </div>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon color="#fafafa" />
            </Badge>
            <Button
              sx={{
                padding: "0.5rem 1.2rem",
                ml: 1,
                bgcolor: "#363537",
                borderRadius: 10,
              }}
            >
              <FavoriteIcon sx={{ fontSize: 25, color: "rgb(204,0,0)" }} />
              <Typography
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: "bold",
                  color: "#fafafa",
                }}
              >
                5
              </Typography>
            </Button>
          </Box>
          <Button
            sx={{
              minWidth: "40px",
              color: "#fafafa",
              backgroundColor: "transparent",
            }}
            onClick={handleDrawerToggle}
          >
            <CloseIcon fontSize="large" />
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "92%", mt: 7, bgcolor: "#0a0a0a", display:'flex',flexDirection:"column",alignItems:'end' }}>
        <Typography sx={styles.typography}>Todos os Cursos</Typography>
        <Typography sx={styles.typography}>Global</Typography>
        <Typography sx={styles.typography}>Cursos de Inglês</Typography>
        <Typography sx={styles.typography}>Artigos</Typography>
        <Typography sx={styles.typography}>Rooms</Typography>
        <Button>Seja Premium</Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box theme={theme} sx={{ display: "flex" }}>
      <AppBar position="absolute" component="nav" style={styles.appbar}>
        <Toolbar
          style={{
            padding: "0 12px 0 12px",
          }}
        >
          <div
            component="div"
            style={{ flexGrow: 1, display: "flex", alignItems: "flex-start" }}
          >
            <Button
              sx={{
                [theme.breakpoints.up("lg")]: {
                  height: "40px",
                  width: "110px",
                  backgroundImage: `url('https://hermes.digitalinnovation.one/assets/diome/logo.svg')`,
                  backgroundSize: "cover",
                },
                [theme.breakpoints.down("lg")]: {
                  height: "40px",
                  width: "28px",
                  backgroundImage: `url('https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                },
              }}
            />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleSearch}
              sx={{
                [theme.breakpoints.up("lg")]: {
                  display: "none",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
            <CustomizedInputs />
            <Box
              sx={{
                [theme.breakpoints.down("lg")]: {
                  display: "none",
                },
                [theme.breakpoints.up("lg")]: {
                  display: "flex",
                  flexDirection: "row",
                },
              }}
            >
              <Button sx={styles.button}>Todos os cursos</Button>
              <Button sx={styles.button}>Global</Button>
              <Button sx={styles.button}>Cursos de Inglês</Button>
              <Button sx={styles.button}>Artigos</Button>
              <Button sx={styles.button}>Rooms</Button>
              <Button sx={styles.sign}>Seja Premium</Button>
            </Box>
          </div>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon fontSize="large" color="#fafafa" />
            </Badge>
            <Button
              sx={{
                padding: "0.5rem 1.2rem",
                ml: 1,
                bgcolor: "#363537",
                borderRadius: 10,
              }}
            >
              <FavoriteIcon sx={{ fontSize: 30, color: "rgb(204,0,0)" }} />
              <Typography
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: "bold",
                  color: "#fafafa",
                }}
              >
                5
              </Typography>
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              [theme.breakpoints.up("lg")]: {
                display: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sx: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ width: "100%", height: "100%" }}>
        {/* <Toolbar /> */}
        <Outlet />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
