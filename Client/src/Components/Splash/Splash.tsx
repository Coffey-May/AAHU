import React from "react";
import Title from "./Title";
import About from "./About";
import { useStyles } from "./styles";
// import Aside from "./Aside";
import { CssBaseline } from "@material-ui/core";
import Projects from "../Projects/Projects";

{
  if (
    window.location.href === "http://localhost:3000" ||
    window.location.href === "http://localhost:3000/#Home" ||
    window.location.href === "http://localhost:3000/#About" ||
    window.location.href === "http://localhost:3000/#Projets"
  ) {
    document.addEventListener("scroll", function (e) {
      // let el = document.querySelector<HTMLElement>('.overlay')
      // el!.style.opacity = ".8"
      // el!.style.background = 'rgb(10,10,10,0.8)'
      //        var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      console.log("hello", window.pageYOffset);
      if (window.pageYOffset <= 0) {
        document.querySelector<HTMLElement>(".overlay")!.style.background =
          "rgb(10,10,10,0.8)";
      } else if (window.pageYOffset > 0 || window.pageYOffset < 100) {
        document.querySelector<HTMLElement>(".overlay")!.style.background =
          "rgb(5,5,5,0)";
      }
    });
  }
}

const Splash = () => {
  const classes = useStyles();

  // const Waves = useMemo(() => {
  //   return (

  //   )
  // },[])

  return (
    <>
      <CssBaseline />

      <div id="Home" className={classes.splashWrapper}>
        <div
          id="overlay"
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "100%",
            height: "87.5%",
            background: "rgb(10,10,10,0.8)",
          }}
        >
          {/* <div style={{ fontSize: '3em', marginTop: '43vh',marginLeft:'50vw',color:'white' }}>
                     <i style={{padding:'10px'}} className="devicon-html5-plain"></i>
                       <i style={{padding:'10px'}}  className="devicon-css3-plain"></i>
                      <i style={{padding:'10px'}}  className="devicon-express-original"></i>
                      <i style={{padding:'10px'}}  className="devicon-javascript-plain"></i>
                      <i style={{padding:'10px'}}  className="devicon-typescript-plain"></i>

                      <i style={{padding:'10px'}}  className="devicon-nodejs-plain"></i>
                       <i style={{padding:'10px'}}  className="devicon-react-original"></i>
                    <i style={{padding:'10px'}}  className="devicon-redux-original"></i>
                    <i style={{padding:'10px'}}  className="devicon-csharp-plain"></i>
                    <i style={{padding:'10px'}}  className="devicon-dotnetcore-plain"></i>
                    
             
                    <i style={{padding:'10px'}}  className="devicon-git-plain"></i>
                    
                   
                   
                    
                  
                   
                    
                    </div>
          */}

          {/* 
          <div style={{ zIndex: 99, overflow: 'visible' }} data-v-c0cb0066="" data-v-95467d66="" className="wave-line line" >
          <div data-v-c0cb0066="" className="inner">
          <div data-v-c0cb0066="" className="line"></div>
          <div data-v-c0cb0066="" className="line"></div>
          <div data-v-c0cb0066="" className="line"></div>
          <div data-v-c0cb0066="" className="line"></div>
          <div data-v-c0cb0066="" className="line"></div>
          <div data-v-c0cb0066="" className="line"></div>
          </div>
          </div>
           */}

          {/* <Aside /> */}
        </div>

        <Title />
      </div>

      <About />

      <Projects />
    </>
  );
};

export default Splash;
// function rgba(arg0: number, arg1: number, arg2: number, arg3: number): string {
//   throw new Error("Function not implemented.");
// }
