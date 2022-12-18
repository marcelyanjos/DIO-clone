import bg1 from "../../assets/banner-play.png";
import theme from "../../components/theme";
const styles = {
  body: {
    marginTop:'44px',
    width: "100%",
    height: "100%",
    background: "rgb(30, 25, 44)",
  },
  section1: {
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      background: `linear-gradient(360deg, rgb(30, 25, 44) 40.95%, rgba(0, 0, 0, 0.7) 100%), url(${bg1})`,
      height: "380px",
      backgroundSize: "cover",
    },
    [theme.breakpoints.up("md")]: {
      background: `linear-gradient(99.06deg, rgb(0, 0, 0) 45.8%, rgba(0, 0, 0, 0) 90.54%), url(${bg1}) `,
      height: "470px",
      backgroundSize: "cover",
    },
  },
  section2: {
    boxShadow: "none",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(30, 25, 44)",
  },
  cardLeft2: {
    color:'#fafafa',
    boxShadow: "none",
    bgcolor: "transparent",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      pl: 5,
      pt: 2,
    },
  },
  cardRight2: {
    boxShadow: "none",
    bgcolor: "transparent",
    [theme.breakpoints.down("lg")]: {
      display: "grid",
      flexDirection: "column",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      pl: 5,
      pt: 2,
    },
  },
  bodyCardLeft2: {
    color: "#fafafa",
    boxShadow: "none",
    bgcolor: "transparent",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      width: "528px",
      textAlign: "end",
    },
  },
  bodyCardRight2: {
    color: "#fafafa",
    boxShadow: "none",
    bgcolor: "transparent",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      width: "528px",
      textAlign: "start",
    },
  },
  section5: {
    borderRadius:0,
    [theme.breakpoints.up("md")]: {
      mt: "5rem",
    },
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(rgb(30, 25, 44) 19.52%, rgb(86, 27, 133) 56.74%, rgb(184, 115, 217) 95.58%);",
  },
  body5: {
    bgcolor: "transparent",
    color: "#fafafa",
    p: "1rem",
    boxShadow: "none",
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      margin: "0px auto 6.75rem",
      padding: "0px 1.5rem",
    },
    [theme.breakpoints.down("xl")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      minWidth: 0,
      maxWidth: "768px",
      width: "100%",
    },
  },
  grid5: {
    [theme.breakpoints.up("xl")]: {
      alignItems: "center",
      justifyContent: "center",
      display: "grid",
      gridTemplateColumns: "repeat(3, 16.25rem)",
      gridAutoFlow: "row",
      marginTop: 0,
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      justifyContent: "center",
      display: "grid",
      gridTemplateColumns: "repeat(3, 16.25rem)",
      gridAutoFlow: "row",
      marginTop: "2.5rem",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "2.5rem",
    },
    boxShadow: "none",
    bgcolor: "transparent",
    // width: "60%",
  },
  gridItem5: {
    bgcolor: "transparent",
    color: "#fafafa",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 4,
  },
  h1: {
    color: "rgb(35, 221, 122)",
    // margin: "0.6em 0px",
    marginBottom: 0,
  },
  p: {
    marginTop: 0,
    textAlign: "center",
  },
  button: {
    color: "#fafafa",
    fontWeight: "bold",
    padding: "0.6rem 1.5rem",
    borderRadius: "1.5rem",
    background: "rgb(228,16,93)",
    "&..after": {
      border: "1px solid rgb(228,16,93)",
    },
  },
};
export default styles;
