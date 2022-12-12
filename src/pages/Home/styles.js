import bg1 from "../../assets/banner-play.png";

const styles = {
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1e192c",
  },
  section1: {
    background: {
      md: `linear-gradient(99.06deg, rgb(0, 0, 0) 45.8%, rgba(0, 0, 0, 0) 90.54%), url(${bg1}) `,
      sm: `linear-gradient(360deg, rgb(30, 25, 44) 40.95%, rgba(0, 0, 0, 0.7) 100%), url(${bg1})`,
      xs: `linear-gradient(360deg, rgb(30, 25, 44) 40.95%, rgba(0, 0, 0, 0.7) 100%), url(${bg1})`,
    },
    backgroundSize: { md: "cover", sm: "cover", xs: "cover" },
    height: { sm: "380px", xs: "380px", md: "530px" },
  },
  text:{
    fontSize:'56px',
    fontWeight:'bold',
    fontFamily:'Open Sans',
    WebkitTextFillColor:'transparent',
    WebkitBackgroundClip:'text',
    background:'linear-gradient(90.33deg, rgb(166, 75, 214) 0.1%, rgb(227, 18, 96) 55.24%)'
  }
};
export default styles;
