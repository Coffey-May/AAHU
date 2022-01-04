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
          // padding: "2em 2em 2em 2em",
        }}
      >
        <img
          style={{
            background: "radial-gradient(black,black,transparent,transparent)",
            transform: "rotate(70deg)",
            position: "absolute",
            width: "20vw",
            left: "-9vw",
            top: "85.5vh",
            // zIndex: "-1",
            // margin: "0em 3em 0em 0em",
            // padding: "0em 5em -2em 0em",

            // position: "relative",
          }}
          src={`${Memphis}`}
          alt="memphis design"
        />
        <Container>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <h1
              style={{
                padding: "3em 0em 2em 0em ",
                color: "#d1006c",
                borderBottom: "1px solid #d1006c",
              }}
            >
              ABOUT ME
            </h1>

            <p
              style={
                width < 900
                  ? {
                      columnCount: 1,
                      padding: "2em 0em 2em 0em",
                      lineHeight: "2em",
                      fontSize: "1.25em",
                    }
                  : {
                      columnCount: 2,
                      padding: "2em 0em 2em 0em",
                      lineHeight: "1.5em",
                      fontSize: "1.44em",
                    }
              }
            >
              Why paint in 10 brushstrokes what could be achieived with one? Why
              program a function in ten lines rather than one? Why learn through
              rote, brute force memorization, as opposed to a blend of exposure,
              collaboration, and blended methodologies? I have done both, this
              has taken years. I have become intuitive with programming. The
              Analogues between realist oil painting, skateboarding, and bonsai,
              all share similar characteristics with code writing. Time plus
              experimentation all help to determine success through trial and
              error. This is the nature of mastery. I can solve nearly any
              coding problem, and am eager to work with likeminded individuals.
              While it is good to be a strong programmer, the nature of well
              constructed software consists of collaborative efforts and a
              shared outcome. Being a good softwaare developer today is akin to
              being an egyptian scribe. Coding is like using only two stones to
              traverse a creek without getting wet. Toss a stone, hop on it,
              toss the second stone, pickup the first, and repeat. The
              challaange is through navigativing next steps.{" "}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-around",
                backgroundColor: "#222",
                borderRadius: "15px",
                marginBottom: "4em",
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
