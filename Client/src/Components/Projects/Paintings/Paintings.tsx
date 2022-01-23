import React, { useEffect, useState } from "react";
import styled from "styled-components";

import cSharpSnip from "../../../assets/cSharpsnip.png";
import cSharpSnip1 from "../../../assets/Screen Shot 2022-01-22 at 7.25.04 PM.png";
// Client/src/assets/Screen Shot 2022-01-22 at 7.25.04 PM.png

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
  src: ` ${cSharpSnip1}`,
})`
  width: 100%;
  height: auto;
  border: 1px solid black;
  float: left;
  margin: 1vw 0vw;
`;
const HeaderImg1 = styled.img.attrs({
  src: ` ${cSharpSnip}`,
})`
  width: 100%;
  overflow: scroll;
  float: right;
  padding: -2em;
`;
// const input = "```code in your Markdown file.```";

const Paintings = () => {
  const { width } = useWindowDimensions();
  return (
    <StyledContainer>
      <StyledHeader>
        Contemporary Realism and C#
        <a
          style={{ textDecoration: "none", color: "#666" }}
          target="_blank"
          href="https://github.com/Coffey-May/MyPaintingsMVC"
        >
          <i
            className="devicon-github-original"
            style={{ fontSize: "1em", paddingLeft: "1em" }}
          ></i>
        </a>
      </StyledHeader>

      <hr />
      <StyledP style={width < 900 ? { columnCount: 1 } : { columnCount: 2 }}>
        &nbsp;&nbsp;&nbsp;&nbsp;This application served as my Back End Capstone
        during my time in software school. Coded in C# and using ASP.NET core,
        this application considers complex resources and their relationships.
        <HeaderImg></HeaderImg>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;MVC architecture and SQL server database have
        been implimented in order to organize data access layers and the
        business logic. Different user roles handled by Identity fraamework and
        a built in CMS ensure a unique experiences for each user. Entity
        framework and migrations are used to manage UI and application state
        <HeaderImg1></HeaderImg1>
      </StyledP>
    </StyledContainer>
  );
};

export default Paintings;
