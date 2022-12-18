import theme from "../../components/theme";
const styles = {
  body: {
    boxShadow: "none",
    bgcolor: "#1e192c",
    [theme.breakpoints.up("lg")]: {
      minHeight: "calc(100vh - 5.4375rem)",
    },
    height: "100%",
    marginTop: -1,
    mb: -10,
    borderRadius: 0,
    padding: "0px 1.5rem",
  },
  root: {
    boxShadow: "none",
    borderRadius: "none",
    bgcolor: "transparent",
    margin: "4.25rem 0px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-evenly",
      // padding: "0px 1.5rem",
    },
    width: "100%",
    [theme.breakpoints.down("md")]: {
      ml: 3,
      padding: "1rem 0",
    },
  },
  cardLeft: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
    bgcolor: "transparent",
    margin: "4.25rem 0px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "20rem",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "34rem",
    },
  },
  leftTitle: {
    lineHeight: 1.2,
    margin: "0.67em 0px",
    color: "#fafafa",
    [theme.breakpoints.down("md")]: {
      mt: 5,
      fontSize: "1.625rem",
      fontWeight: 400,
    },
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "Open Sans",
  },
  cardRight: {
    [theme.breakpoints.down("md")]: {
      marginTop: "-35px",
    },
    height: "0.5rem",
    background:
      "linear-gradient(270deg, rgb(50, 33, 78) -3.55%, rgb(135, 71, 175) 100.21%)",
    width: "100%",
    maxWidth: "6rem",
    borderRadius: "1rem",
  },
  textField: {
    input: {
      fontFamily: "Open Sans",
      color: "#fafafa",
      "&::placeholder": {
        opacity: 1,
      },
    },
    "& .MuiInputBase-root": {
      color: "#ffffff",
      textOverflow: "ellipsis !important",
      pb: 0.5,
      pt: 0.5,
      margin: "0.5rem 0px",
      "&::before": {
        borderColor: "rgb(59, 52, 80)",
      },
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(135, 71, 175)",
    },
    "&.Mui-disabled:hover::before": {
      borderColor: "inherit",
    },
  },
};
export default styles;
