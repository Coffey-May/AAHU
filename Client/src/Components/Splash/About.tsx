import React from 'react'
import { useStyles } from "./styles";
import Card from './Projects/CardComponent';
import Memphis from '../../assets/memphis.png'




const About = () => {
    const classes = useStyles();
    return (
        <>
     
        <div id="About" className={classes.about} style={{position: 'relative',zIndex:1,marginTop:'-32vh',minHeight:'40vh',width:'100%',backgroundColor:'#FFFFF3' }}>
  <img style={{ background: 'radial-gradient(black,black,transparent,transparent)', transform: 'rotate(70deg)',position:'absolute',width:'10vw'}}  src={`${Memphis}`} alt="memphis design" />
              <div style={{width:'80%',margin:'0 auto' }}>
    
              <h1 style={{padding:'1em 1em 1em 0em '}}>ABOUT ME</h1>
              <p style={{columnCount:2}}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum reiciendis suscipit molestias deleniti adipisci minima placeat dicta blanditiis modi dolores unde quod assumenda, harum, magni consequatur, voluptate facilis eligendi facere consectetur sapiente. Deserunt sapiente alias reiciendis aperiam porro, odio exercitationem maxime impedit laboriosam mollitia molestias officia vel earum commodi similique! </p>
              </div>
          
        </div>
        </>
    )
}

export default About
