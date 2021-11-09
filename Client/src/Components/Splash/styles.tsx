import { makeStyles } from "@material-ui/core/styles";
import image from "../../assets/gradientSky.jpeg";
import image1 from "../../assets/stars.jpeg";

// let pine = '#157A6E'
// let shamRock = '#157A6E',
// let ashGray = '#C2C5BB'
// let darkSea = '#77B28C'
// let brownSugar = '#B4654A'

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize:'4rem',
    letterSpacing:' .4rem',
    [theme.breakpoints.down(550)]: {
      fontSize:'2.75rem',
      letterSpacing:' .3rem',
    },  
  },
  subtitle: {
    fontSize:'2.5rem',
    [theme.breakpoints.down(550)]: {
      fontSize:'1.75rem',
    },  
  },
  nameTitle: {
    marginTop: "35vh",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "verdana",
    color: "#f5f5f5",
    textShadow: " 0 0 0.05em currentColor",
      [theme.breakpoints.down(960)]: {
        marginTop: "15vh",
      },  
 },
 splashLeft:{
backgroundColor:'#157A6E',
 },
 
memphis: {
  zIndex:99,
  overflow:'hidden',
  display:'block',
  width:'90%',
  margin:'0 auto',
  position:'relative',
  top:'15vh',
  [theme.breakpoints.down(960)]: {
    width:'60%',
    top: '8vh',
    left: '10vw',
  
      
  }, 
  [theme.breakpoints.down(700)]: {
    width:'50%',
    top:'8vh',

  },  
  [theme.breakpoints.down(550)]: {
    width:'65%',
    top:'8vh',
   
  }, 
},

 about:{

 },
  splashWrapper: {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.1), rgba(255, 254, 199, 0.5)), 
        url(${image})`,
    animation: "$move-twink-back 2s infinite",
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
cloud1:{
  animation: " $clouds 30s infinite,$fadeIn2 15s infinite",
  willChange:'transform,opacity,left,right',
  
},
cloud2:{
  animation: " $clouds 24s infinite, $fadeIn2 12s infinite",
  willChange:'transform,opacity,left,right',
},
cloud3:{
  animation: " $clouds 30s infinite,$fadeIn2 60s infinite",
  willChange:'transform,opacity,left,right',
},
cloud4:{
  animation: " $clouds 26s infinite,fadeIn2 12s infinite",
  willChange:'transform,opacity,left,right',
},
cloud5:{
  animation: "$clouds 51s infinite,fadeIn2 15s infinite",
  willChange:'transform,opacity,left,right',
},
"@keyframes clouds" :{
  "0%" :{
     transform: 'scale(1, 1.1)',
left:-100,

   },
   "50%" :{
     transform: 'scale(1.3 , 1.3)',
     right:100,

   },

   "100%": {
    left:-100,
     transform: 'scale(1, 1.1)',

   },

 },



  // star: {
  //   position: 'absolute',

  //   top:Math.floor(Math.random() * 600) + 1,
  //   width: Math.floor(Math.random() * 2.2) + 1,
  //   height: Math.floor(Math.random() * 2.2) + 1,
  //   background: 'rgba(255,255,255,0.0)',
  //   borderRadius: '99px',
  //   animation: "$twinkle 2s infinite",
  //   margin: Math.random() * Math.random(),

  // },

  // "@keyframes twinkle" :{
  //  "0%" :{
  //     transform: 'scale(1, 1)',
  //     background: 'rgba(255,255,255,0.0)',
  //     animationTimingFunction: `${rand}`,

  //   },
  //   "60%" :{
  //     transform: 'scale(0.8, 0.8)',
  //     background: 'rgba(255,255,255,.7)',
  //     animationTimingFunction: 'ease-out',

  //   },
  //  "80%":{
  //     background: 'rgba(255,255,255,0.00)',
  //     transform: 'scale(1, 1)',

  //   },
  //   "100%": {
  //     background: 'rgba(255,255,255,0.0)',
  //     transform: 'scale(1, 1)',

  //   },

  // },
}));

// position: 'absolute',
// top: '50%',
// right: '50%',
// transform: 'translate(50%,-50%)',
// textTransform: 'uppercase',
// fontFamily: 'verdana',
// // font-size: '12em',
// // font-weight: 700;
// color: '#f5f5f5',
// textShadow: '1px 1px 1px #919191,
//     1px 2px 1px #919191,
//     1px 3px 1px #919191,
//     1px 4px 1px #919191,
//     1px 5px 1px #919191,
//     1px 6px 1px #919191,
//     1px 7px 1px #919191,
//     1px 8px 1px #919191,
//     1px 9px 1px #919191,
//     1px 10px 1px #919191,
// 1px 18px 6px rgba(16,16,16,0.4),
// 1px 22px 10px rgba(16,16,16,0.2),
// 1px 25px 35px rgba(16,16,16,0.2),
// 1px 30px 60px rgba(16,16,16,0.4)',
