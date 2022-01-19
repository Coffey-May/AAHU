import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import Memphis from "../../assets/memphis.png";
import Container from "@material-ui/core/Container";

import best from "../../assets/Screen-Shot-2021-12-21-at-3.14.35-AM.webp";
import best1 from "../../assets/Screen-Shot-2022-01-03-at-10.21.41-PM.webp";

function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return {
    width,
  };
}

const About = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  return (
    <>
      <div
        id="About"
        className={classes.about}
        style={{
          zIndex: 99,
          minWidth: "100vw",
          backgroundColor: "rgba(245,245,245)",
          // marginTop: "0.5em",
          // paddingTop: "1px",
        }}
      >
        <img
          style={{
            background: "radial-gradient(black,black,transparent,transparent)",
            transform: "rotate(70deg)",
            position: "absolute",
            width: "16vw",
            left: "-7vw",
            // top: "50.75vh",

            // zIndex: "-1",
            margin: "7em 3em 0em 0em",
            padding: "0em 5em -2em 0em",

            // position: "relative",
          }}
          src={`${Memphis}`}
          alt="memphis design"
        />
        <Container>
          <div style={{ width: "80%", margin: "0 auto", paddingBottom: "4em" }}>
            <h1
              style={{
                // marginTop: "2",
                padding: "1.5em 0em 1.5em 0em ",
                color: "#d1006c",
                borderBottom: "1px solid #d1006c",
                fontSize: "3em",
              }}
            >
              ABOUT ME{" "}
            </h1>

            <p
              className={classes.first}
              style={
                width < 900
                  ? {
                      color: "black",
                      columnCount: 1,
                      padding: "2em 0em 2em 0em",
                      lineHeight: "2em",
                      fontSize: "1.25em",
                    }
                  : {
                      color: "black",
                      columnCount: 2,
                      padding: "2em 0em 2em 0em",
                      lineHeight: "1.5em",
                      fontSize: "1.50em",
                      fontWeight: "lighter",
                    }
              }
            >
              &nbsp;&nbsp; &nbsp; &nbsp;Hello, My name is Coffey May. I am a
              JavaScript developer who is proficient with React.js. I enjoy
              working at all levels of the development process, from
              wireframing/ implimenting a design system, building a front end,
              connecting it to an api and finally to maintaining through CI/CD.
              Although I am a full stack developer I do enjoy making applcations
              that are beautiful and responsive. interface components and
              implementing them following well-known React.js workflows (such as
              Flux or Redux). I aim to ensure that these components and the
              overall application are robust and easy to maintain. You will
              coordinate with the rest of the team working on different layers
              of the infrastructure. Therefore, a commitment to collaborative
              problem solving, sophisticated design, and quality product is
              important.
              {/* <span
                style={{
                  fontSize: "1.25em",
                  // fontWeight: "lighter",
                  // float: "left",
                  shapeOutside: "inset(1% round 90%)",
                  // padding: "50px",
                  // marginLeft: "-.69em",
                }}
              >
                &nbsp;&nbsp; &nbsp; &nbsp;B
              </span>
              ecoming fluent and intuitive with programming is a wonderful
              feeling. Why paint in 10 brushstrokes what could be achieived with
              one? Why program a function in ten lines rather than one? Why
              learn through rote, brute force memorization, as opposed to a
              blend of exposure, collaboration, and blended methodologies?{" "}
              <br /> &nbsp;&nbsp; &nbsp; &nbsp;The Analogues between realist oil
              painting, skateboarding, frizbee golf, bonsai, or any other,
              essentially existential pursuit; that requires extended practice,
              all share similar characteristics with code writing. Time... plus
              experimentation, all help to determine success through trial and
              error.
              <br /> &nbsp;&nbsp; &nbsp; &nbsp; This is the nature of mastery.
              However, I am eager to work with likeminded individuals. In this
              way, new problems can be navigated with combined experience. While
              it is good to be a strong programmer, the nature of well
              constructed software consists of collaborative efforts and a
              shared outcome.
              <br /> &nbsp;&nbsp; &nbsp; &nbsp; This Website illustrates some of
              what I can offer as a developer. Coding is like using only two
              stones to traverse a creek without getting wet. Toss a stone, hop
              on it, toss the second stone, pickup the first, and repeat. The
              challange is through navigativing next steps. Now what if the
              water gets too deep for the stone? */}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-around",
                backgroundColor: "#222",
                borderRadius: "15px",
                // filter: "invert(1)",
              }}
            >
              <img
                style={{
                  // marginTop: "-20vh",

                  width: "5rem",
                  opacity: "0.7",
                  borderRadius: "15px",
                }}
                src={best}
                alt="devtools lighthouse report stats"
              />
              <img
                style={{
                  // marginTop: "-20vh",

                  width: "5rem",
                  opacity: "0.7",
                  borderRadius: "15px",
                }}
                src={best1}
                alt="devtools lighthouse report stats"
              />
            </div>

            {/* <img style={{ width: "3rem" }} src={best} alt="" /> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
