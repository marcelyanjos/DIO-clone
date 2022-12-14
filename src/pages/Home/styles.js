import bg1 from "../../assets/banner-play.png";
import theme from "../../components/theme";
const styles = {
  body: {
    width: "100%",
    height: "100%",
    background: "rgb(30, 25, 44)",
  },
  section1: {
    padding:'2rem',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
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
  section2:{
    padding:'1rem',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'rgb(30, 25, 44)',
    [theme.breakpoints.down("md")]: {
      height: "380px",
    },
    [theme.breakpoints.up("md")]: {
      height: "500px",
      backgroundSize: "cover",
    },
  },
  section5:{
    padding:'1rem',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'linear-gradient(rgb(30, 25, 44) 19.52%, rgb(86, 27, 133) 56.74%, rgb(184, 115, 217) 95.58%);',
    [theme.breakpoints.down("md")]: {
      height: "380px",
    },
    [theme.breakpoints.up("md")]: {
      height: "600px",
      backgroundSize: "cover",
    },
  },
  button:{
    // WebkitFilter: 'blur(10px) saturate(2)',
    color:'#fafafa',
    fontWeight:'bold',
    padding: '0.6rem 1.5rem',
    borderRadius:'1.5rem',
    background:'rgb(228,16,93)',
    '&..after':{
      border:'1px solid rgb(228,16,93)',
    }
  }
};
export default styles;
