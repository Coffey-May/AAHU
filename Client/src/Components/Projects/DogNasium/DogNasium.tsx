import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BM from "../../../assets/Screen Shot 2022-01-19 at 3.20.06 PM.png";
import GQL from "../../../assets/gqlsnip.png";
import DogNasium1 from "../../../assets/dogNasium4.jpg";

// import Bp from "../../assets/Screen Shot 2022-01-07 at 1.01.05 AM.png";

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

const StyledContainer = styled.section`
  max-width: 70vw;
  padding-top: 100px;
  margin: 0 auto;
`;
const StyledHeader = styled.h1`
  font-size: 6vh;
  color: #666;
  text-align: center;
`;
const StyledP = styled.p`
  font-size: 2.5vh;
  letter-spacing: 1px;
  padding-bottom: 3em;
`;
const HeaderImg = styled.img.attrs({
  src: ` ${BM}`,
})`
  width: 100%;
  height: auto;
  border: 1px solid blue;
  float: left;
  margin: 1vw 0vw;
`;
const HeaderImg1 = styled.img.attrs({
  src: ` ${DogNasium1}`,
})`
  width: 100%;
  height: auto;
  float: right;
  margin: 1vw 0vw;
  padding: -2em;
`;
// const input = "```code in your Markdown file.```";

const DogNasium = () => {
  const { width } = useWindowDimensions();
  return (
    <StyledContainer>
      <StyledHeader>
        Dog-Nasium
        <a
          style={{ textDecoration: "none", color: "#666" }}
          target="_blank"
          href="https://github.com/Coffey-May/DogNasium"
        >
          <i
            className="devicon-github-original"
            style={{ fontSize: "1em", paddingLeft: "1em" }}
          ></i>
        </a>
      </StyledHeader>

      <hr />
      <StyledP style={width < 900 ? { columnCount: 1 } : { columnCount: 2 }}>
        &nbsp;&nbsp;&nbsp;&nbsp;This project served as my Front End Capstone
        project while in software school. It displays the customer facing UI of
        an imaginary business known as Dog-Nasium. Dog-Nasium, is an indoor dog
        park that customers can use during bad weather or other reasons of
        convenience. The park offers differing plans for differing prices with
        varying levels of access. Text inputs and checkboxes are implimented to
        achieve data gathering.
        {/* <HeaderImg></HeaderImg> */}
        <video width="100%" height="auto" controls>
          <source
            src="Videos/screen recording 2020-03-01 at 11.21.56 am.mp4"
            type="video/mp4"
          />
        </video>
        &nbsp;&nbsp;&nbsp;&nbsp;A login/signup is required to begin.
        Authentication is handled via local storage.All other data interactions
        are handled via a local JSON database. Dynamic form generation gathers
        user input into unique objects that maintain the state of user data
        throughout the session. Simple animations, help guide the user
        throughout the process of building a plan, and performing updates to
        their plans.
        <HeaderImg1></HeaderImg1>
      </StyledP>
    </StyledContainer>
  );
};

export default DogNasium;
