import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import Memphis from "../../assets/memphis.png";
import Container from "@material-ui/core/Container";

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
        }}
      >
        <Container>
          <img
            style={{
              background:
                "radial-gradient(black,black,transparent,transparent)",
              transform: "rotate(70deg)",
              position: "absolute",
              width: "5vw",
            }}
            src={`${Memphis}`}
            alt="memphis design"
          />
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
                      padding: "2em 0em 6em 0em",
                      lineHeight: "2em",
                      fontSize: "1.25em",
                    }
                  : {
                      columnCount: 2,
                      padding: "2em 0em 6em 0em",
                      lineHeight: "2em",
                      fontSize: "1.25em",
                    }
              }
            >
              {" "}
              Why paint in 10 brushstrokes what could be achieived with one? Why
              program a function in ten lines rather than one? Why learn through
              rote, brute force memorization, as opposed to a blend of exposure,
              collaboration, and blended methodologies? I have done both, this
              has taken years. I have become intuitive with programming. The
              Analogues between realist oil painting, skateboarding, and bonsai,
              all share similar characteristics with code writing. Time plus
              experimentation all help to determine success through trial and
              error. This is the nature of mastery. I can solve nearly any
              coding problem, and aam eager to work with likeminded individuals.
              But to use and apply that language, we must be able to fully to
              appreciate, to feel, to seize the unseen, the unconscious.” “As
              soon as I have got flying to perfection, I have got a scheme about
              a steam engine.”{" "}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
