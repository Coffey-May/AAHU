import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bp from "../../../assets/Screen Shot 2022-01-07 at 1.01.05 AM.png";
import GQL from "../../../assets/gqlsnip.png";

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
// const HeaderImg = styled.img.attrs({
//   src: ` ${Bp}`,
// })`
//   width: 13rem;
//   height: 13rem;
//   border: 1px solid blue;
//   float: left;
//   margin: 1vw 2vw;
// `;
const HeaderImg1 = styled.img.attrs({
  src: ` ${GQL}`,
})`
  width: 100%;
  height: auto;
  float: right;
  margin: 2vw 0vw;
  padding: -2em;
`;
// const input = "```code in your Markdown file.```";

const GraphQl = () => {
  const { width } = useWindowDimensions();
  return (
    <StyledContainer>
      <StyledHeader>
        GraphQL Custom API
        <a
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#666" }}
          target="_blank"
          href="https://github.com/Coffey-May/graphql-api"
        >
          <i
            className="devicon-github-original"
            style={{ fontSize: "1em", paddingLeft: "1em" }}
          ></i>
        </a>
      </StyledHeader>

      <hr />
      <StyledP style={width < 900 ? { columnCount: 1 } : { columnCount: 2 }}>
        &nbsp;&nbsp;&nbsp;&nbsp;This project utilizes a GraphQL schema that acts
        as a database access layer. This API connects to a MongoDB database to
        persist data. It returns numerous queries from the client side, and
        includes a filter that accesses data via dates that are parsed from ISO
        format to UTC, and back again. A query cheat sheet is provided in the
        README documentation on github, along with instructions to clone and set
        up the project. Full Crud operations are employed and resource
        relationships are considered using foreign keys. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Odit placeat saepe quaerat harum ea
        et cumque cum nam vitae eius?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Magni, explicabo quia consequuntur architecto, eos
        distinctio voluptatem cupiditate, commodi blanditiis repudiandae
        dignissimos quam repellat corrupti molestias debitis quas accusantium
        mollitia. Enim ipsa quo earum obcaecati dolore assumenda exercitationem
        modi molestias atque.
        <HeaderImg1></HeaderImg1>
      </StyledP>
    </StyledContainer>
  );
};

export default GraphQl;
