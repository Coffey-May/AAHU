import React, { useState } from "react";
import loadable from "@loadable/component";

// import Title from "./Title";
// import About from "./About";
import { useStyles } from "./styles";
import { CssBaseline } from "@material-ui/core";
// import Projects from "../Projects/Projects";
import Switch from "@material-ui/core/Switch";
const Title = loadable(() => import("./Title"));
const About = loadable(() => import("./About"));
const Projects = loadable(() => import("../Projects/Projects"));
// import Aside from "./Aside";

// let url = 'http://localhost:3000'

// if (
//   window.location.href === `${url}` ||
//   window.location.href === `${url}/#Home` ||
//   window.location.href === `${url}/#About `||
//   window.location.href === `${url}/#Projets`
// )

document.addEventListener("scroll", function (e) {
  let elem = document.querySelector<HTMLElement>(".overlay") || null;

  const hideCheck = () => {
    if (!elem) {
      return;
    }
    if (window.pageYOffset <= 0) {
      elem!.style.background = "rgb(10,10,10,0.8)";
    } else if (window.pageYOffset > 0 || window.pageYOffset < 100) {
      elem!.style.background = "rgb(5,5,5,0)";
    }
  };
  hideCheck();
});

// const handleChange = () => {
//   document.querySelector<HTMLElement>("#invertDiv")!.style.filter = "invert(1)"
//     ? (document.querySelector<HTMLElement>("#invertDiv")!.style.filter = "none")
//     : (document.querySelector<HTMLElement>("#invertDiv")!.style.filter =
//         "invert(1)");
// };

const Splash = () => {
  const [checked, setcChecked] = useState<boolean | null>(false);
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
            // marginTop: 0,
            overflow: "hidden",
            top: 0,
            left: 0,
            bottom: 0,
            width: "100%",
            minHeight: "100%",
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
      <div style={checked ? { filter: "invert(1)" } : { filter: "invert(0)" }}>
        <span
          style={{
            marginLeft: "45%",
            marginTop: "8em",
            position: "absolute",
          }}
        >
          <Switch
            // checked={checked}
            onChange={() => setcChecked(!checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </span>
        <About />
      </div>
      <Projects />
    </>
  );
};

export default Splash;
// function rgba(arg0: number, arg1: number, arg2: number, arg3: number): string {
//   throw new Error("Function not implemented.");
// }
