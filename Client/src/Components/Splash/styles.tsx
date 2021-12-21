import { makeStyles } from "@material-ui/core/styles";
// import image from "../../assets/gradientSky.jpeg";
// import image1 from "../../assets/stars.jpeg";
import image1 from "../../assets/sun.gif";
import dots from "../../assets/dots.png";

// let pine = '#157A6E'
// let shamRock = '#157A6E',
// let ashGray = '#C2C5BB'
// let darkSea = '#77B28C'
// let brownSugar = '#B4654A'

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "4rem",
    // letterSpacing: ' .4rem',
    overflow: "hidden",
    [theme.breakpoints.down(550)]: {
      fontSize: "3em",
      // letterSpacing: ' .3rem',
    },
  },
  vanish: {
    [theme.breakpoints.down(1400)]: {
      display: "none",
    },
  },
  subtitle: {
    fontSize: "2.5rem",
    [theme.breakpoints.down(550)]: {
      fontSize: ".75rem",
    },
  },
  subtitle1: {
    fontSize: "2.5rem",
    [theme.breakpoints.down(550)]: {
      padding: ".45rem",
      fontSize: "1.4rem",
    },
  },
  nameTitle: {
    marginTop: "20.5vh",
    textTransform: "uppercase",
    fontFamily: "verdana",
    color: "#f5f5f5",
    textShadow: " 0 0 0.05em currentColor",
    [theme.breakpoints.down(660)]: {
      marginTop: "20vh",
      textAlign: "center",
      width: "70vw",
    },
  },
  splashLeft: {
    backgroundColor: "#157A6E",
  },

  memphis: {
    zIndex: 99,
    overflow: "hidden",
    display: "block",
    width: "50%",
    margin: "0 auto",
    position: "relative",
    top: "25vh",
    [theme.breakpoints.down(960)]: {
      display: "none",
    },
  },
  btnFocus: {
    fontSize: "4em",
    "&:hover": {
      background: "none",
    },
    [theme.breakpoints.down(960)]: {
      display: "none",
      fontSize: "2em",
    },
  },
  about: {
    backgroundImage: `url(${dots})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "40vw",
    backgroundPosition: "right 0px",
    marginTop: "-15vh",
    [theme.breakpoints.up(1400)]: {
      marginTop: "-15vh",
    },
    [theme.breakpoints.down(960)]: {
      marginTop: "-15vh",
    },
  },
  splashWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    minHeight: "100vh",

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100vw",
    // backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.1), rgba(255, 254, 199, 0.5)),
    //     url(${image})`,
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0), rgba(100,0,0,0.4)), 
        url(${image1})`,

    // animation: "$move-twink-back 2s infinite",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,

    bottom: 0,
    width: "100%",
    // height: '80%',
    background: "rgb(177,177,177)",

    opacity: "0.5",
    [theme.breakpoints.down(960)]: {
      //  height: '60vh',
    },
  },

  stars: {
    position: "absolute",
    width: "100%",
    minHeight: "100vh",
    background: ` url(${image1}) repeat top center;
         z-index:0`,
    animation: "$fadeIn 5s infinite",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0.4,
    },
    "50%": {
      opacity: 0.7,
    },
    "100%": {
      opacity: 0.4,
    },
  },
  "@keyframes fadeIn2": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
  cloud1: {
    animation: " $clouds 30s infinite,$fadeIn2 15s infinite",
    willChange: "transform,opacity,left,right",
  },
  cloud2: {
    animation: " $clouds 24s infinite, $fadeIn2 12s infinite",
    willChange: "transform,opacity,left,right",
  },
  cloud3: {
    animation: " $clouds 30s infinite,$fadeIn2 60s infinite",
    willChange: "transform,opacity,left,right",
  },
  cloud4: {
    animation: " $clouds 26s infinite,fadeIn2 12s infinite",
    willChange: "transform,opacity,left,right",
  },
  cloud5: {
    animation: "$clouds 51s infinite,fadeIn2 15s infinite",
    willChange: "transform,opacity,left,right",
  },
  "@keyframes clouds": {
    "0%": {
      transform: "scale(1, 1.1)",
      left: -100,
    },
    "50%": {
      transform: "scale(1.3 , 1.3)",
      right: 100,
    },

    "100%": {
      left: -100,
      transform: "scale(1, 1.1)",
    },
  },
  hide: {},
}));
