import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import Memphis from "../../assets/memphis.png";
import Container from "@material-ui/core/Container";

// import best from "../../assets/Screen-Shot-2021-12-21-at-3.14.35-AM.webp";
// import best1 from "../../assets/Screen-Shot-2022-01-03-at-10.21.41-PM.webp";
// import performance from "../../assets/Screen Shot 2022-01-22 at 7.44.10 PM.png";
// import pWA from "../../assets/Screen Shot 2022-01-22 at 7.51.14 PM.png";
import lightHouse from "../../assets/Screen-Shot-2022-01-22-at-7.57.54-PM.webp";
// Client/src/assets/Screen-Shot-2022-01-22-at-7.57.54-PM.webp

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
              ABOUT ME
            </h1>

            <p
              className={classes.first}
              style={
                width < 900
                  ? {
                      color: "black",
                      columnCount: 1,
                      padding: "1em 0em 1em 0em",
                      lineHeight: "1.5em",
                      width: "100%",
                      fontSize: "18px",
                      fontWeight: "lighter",
                    }
                  : {
                      color: "#333",
                      columnCount: 2,
                      padding: "2em 0em 2em 0em",
                      lineHeight: "1.5em",
                      // fontSize: "1.65em",
                      fontSize: "18px",
                      fontWeight: "lighter",
                    }
              }
            >
              &nbsp;&nbsp; &nbsp; &nbsp;Hello, My name is Coffey May. I am a
              JavaScript and React.js developer. I particulary enjoy front end
              work, but as a full stack developer, I am comfortable with working
              at all levels of the development process; from wireframing and
              implimenting a design system, onto integrating a back end and
              database. Beautiful and responsive UI, as well as clean
              maintainable code are important to me. I thrive in a team that
              values collaborative problem solving, sophisticated design, and
              quality work. I am a veresatile developer who adapts to new
              challanges ,technologies, and methodolgies. This project was built
              using a variety of technologies. Typescript, ReactJS, NodeJs,
              MaterialUI, GraphQL, and numerous others. Please visit my{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/Coffey-May"
              >
                GitHub
              </a>{" "}
              , Give me a star, explore, and enjoy...
              <br />
            </p>
            <p
              style={
                width < 900
                  ? {
                      border: "1px solid black",
                      color: "black",
                      // columnCount: 1,

                      padding: "2em 2em 2em 2em",
                      lineHeight: "2em",
                      fontSize: ".5em",
                    }
                  : {
                      color: "#333",
                      // columnCount: 2,

                      padding: "2em 2em 2em 2em",
                      lineHeight: "1.25em",
                      fontSize: "1em",
                      fontWeight: "lighter",
                      border: "1px solid #999",
                    }
              }
            >
              <strong>What I can bring to your team</strong>
              <br />
              • Developing the latest user-facing features using React.js <br />
              • Designing a modern highly responsive web-based user interface
              <br />
              • Building reusable components and front-end libraries for future
              use
              <br />
              • Translating designs and wireframes into high-quality code
              <br />
              • Learn and understand user interactions <br />
              • Optimizing components for maximum performance across a vast
              array of web-capable devices and browsers <br />
              • Coordinating with various teams working on distinct layers
              <br />• Full involvement from conception to completion with
              projects that are technologically sound and aesthetically
              impressive. <br />
              • Strong proficiency in JavaScript, including DOM manipulation and
              the JavaScript object model
              <br />
              • Thorough understanding of React.js and its core principles
              <br />
              • Prior experience with popular React.js workflows (such as Flux
              or Redux)
              <br /> • Familiarity with more current specifications of
              EcmaScript
              <br /> • Familiarity with RESTful APIs
              <br /> • Familiarity with HTML / CSS
              <br /> • GIT experience, Team work-flows, and remote coordination
              <br />
              • Knowledge of modern authorization mechanisms, such as JSON Web
              Token
              <br /> • Familiarity with modern front-end build pipelines and
              tools. <br />
              • Experience with common front-end development tools such as
              Babel, Webpack, NPM, etc. <br />• Ability to understand business
              requirements and translate them into technical requirements
            </p>
            <div style={{ textAlign: "center", padding: "2em" }}>
              <strong>
                My goals are to always strive for performant and optimized
                applications.
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                // padding: "2em",
                justifyContent: "space-around",
                backgroundColor: "#222",
                borderRadius: "15px",
              }}
            >
              <img
                style={{
                  // marginTop: "-20vh",

                  width: "50%",
                  // opacity: "0.7",
                  borderRadius: "15px",
                  // marginTop: "-1vh",
                }}
                src={lightHouse}
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
