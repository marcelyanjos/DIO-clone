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
} from "@mui/material";
import Radio from "@mui/material/Radio";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../theme";
import { ReactComponent as Logo } from "../../assets/logo-dio.svg";
import { ReactComponent as IconPortuguese } from "../../assets/ic-br.svg";
import { ReactComponent as IconSpanish } from "../../assets/ic-en.svg";
import { ReactComponent as IconEnglish } from "../../assets/ic-es.svg";
import styles from "./styles";
import Footer from "../Footer";
import routes from '../../App'

// const drawerWidth = 240;
const navItems = ["Home", "Catálogo", "Planos", "Para Empresas"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("pt-br");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={styles.drawer}>
      <div style={styles.close}>
        <Button
          style={{
            color: "#fafafa",
            backgroundColor: "transparent",
          }}
          onClick={handleDrawerToggle}
        >
          <CloseIcon fontSize="large" />
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo style={styles.logo} />
        <List sx={{ mt: -1, mb: -1 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{
                  "&&:hover": {
                    backgroundColor: "transparent",
                    color: "#e4105d",
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: "21px",
                    textAlign: "center",
                    fontFamily: "Open Sans",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div style={{ display: "flex" }}>
          <Button href='/signUp' sx={styles.buttonSignOut}>Cadastrar</Button>
          <Button href='/signIn' variant="contained" sx={styles.buttonSign}>
            Entrar
          </Button>
        </div>
        <div style={{ display: "flex", marginTop: 10 }}>
          <Radio
            sx={styles.avatar}
            checked={selectedValue === "pt-br"}
            onChange={handleChange}
            disableRipple
            value="pt-br"
            icon={<IconPortuguese />}
            checkedIcon={<IconPortuguese />}
            name="radio-buttons"
          />
          <Radio
            sx={styles.avatar}
            checked={selectedValue === "en"}
            onChange={handleChange}
            value="en"
            disableRipple
            icon={<IconEnglish />}
            checkedIcon={<IconEnglish />}
            name="radio-buttons"
          />
          <Radio
            sx={styles.avatar}
            checked={selectedValue === "es"}
            onChange={handleChange}
            value="es"
            disableRipple
            icon={<IconSpanish />}
            checkedIcon={<IconSpanish />}
            name="radio-buttons"
          />
        </div>
      </div>
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
              <Logo />
            </div>
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
            <Box
              sx={{
                [theme.breakpoints.down("lg")]: {
                  display: "none",
                },
                [theme.breakpoints.up("lg")]: {
                  display: "flex",
                },
              }}
            >
                <Button href='/' sx={styles.button}>
                  Home
                </Button>
                <Button sx={styles.button}>
                  Catálogo
                </Button>
                <Button sx={styles.button}>
                  Planos
                </Button>
                <Button sx={styles.button}>
                  Para empresas
                </Button>
              <Button href='/signIn' sx={styles.sign}>Entrar</Button>
              <Button href='/signUp' sx={styles.sign}>Cadastrar</Button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Radio
                  sx={styles.avatar}
                  checked={selectedValue === "pt-br"}
                  onChange={handleChange}
                  disableRipple
                  value="pt-br"
                  icon={<IconPortuguese />}
                  checkedIcon={<IconPortuguese />}
                  name="radio-buttons"
                />
                <Radio
                  sx={styles.avatar}
                  checked={selectedValue === "en"}
                  onChange={handleChange}
                  value="en"
                  disableRipple
                  icon={<IconEnglish />}
                  checkedIcon={<IconEnglish />}
                  name="radio-buttons"
                />
                <Radio
                  sx={styles.avatar}
                  checked={selectedValue === "es"}
                  onChange={handleChange}
                  value="es"
                  disableRipple
                  icon={<IconSpanish />}
                  checkedIcon={<IconSpanish />}
                  name="radio-buttons"
                />
              </div>
            </Box>
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
        <Footer />
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
