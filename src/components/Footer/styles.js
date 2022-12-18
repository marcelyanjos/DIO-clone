import theme from "../theme";
const styles = {
  body: {
    bgcolor: "#0d1228",
    borderRadius: 0,
    p: "1rem",
  },
  card: {
    p: "1rem",
    color: "#fafafa",
    bgcolor: "transparent",
    boxShadow: "none",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  },
  card2: {
    color: "#fafafa",
    bgcolor: "transparent",
    boxShadow: "none",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    margin: "2rem 0px",
    paddingTop: "4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "flex,",
    },
  },
  left: {
    color: "#fafafa",
    bgcolor: "transparent",
    boxShadow: "none",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.up("lg")]: {
      // width:"50%",
      display: "flex",
      // alignItems: "center",
      justifyContent: "space-between",
    },
  },
  right: {
    color: "#fafafa",
    boxShadow: "none",
    bgcolor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    m: 0,
    p: 0,
    margin: "0.3rem 0px",
    fontSize: "1rem",
    fontFamily: "Open Sans",
    fontWeight: "500",
    color: "#b9bac1",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#fafafa",
    },
  },
  button: {
    fontFamily: "Open Sans",
    bgcolor: "#fafafa",
    width: "11rem",
    padding: "0.5rem",
    margin: "1rem",
    borderRadius: 50,
    color: "#1e192c",
    "&:hover": {
      bgcolor: "#fafafa",
      color: "#8647ad",
    },
  },
  buttonIcon: {
    margin: "0.5rem",
    width: "2rem",
    height: "2rem",
  },
  medias: {
    color: "#b9bac1",
    width: "2.5rem",
    height: "2.5rem",
    margin: "0.5rem",
    padding: "0.5rem",
    border: "1px solid #b9bac1",
    "&:hover": {
      color: "#fafafa",
      border: "1px solid #fafafa",
    },
  },
};
export default styles;
