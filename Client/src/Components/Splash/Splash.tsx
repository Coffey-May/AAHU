import React from "react";
import Title from "./Title";
import About from './About'
import { useStyles } from "./styles";
import Aside from "./Aside";
import { CssBaseline } from "@material-ui/core";
import Projects from "./Projects/Projects";
// import Paper from '@material-ui/core/Paper';

const Splash = () => {
  const classes = useStyles();
  return (
    <>
    <CssBaseline/>
      <div id="Home" className={classes.splashWrapper}>
     
        <div className={classes.stars}></div>
        
        <Title />
      
        {/* <Aside/> */}
       
      </div>
      <About/>
        <Projects/>
     
    </>
  );
};

export default Splash;
