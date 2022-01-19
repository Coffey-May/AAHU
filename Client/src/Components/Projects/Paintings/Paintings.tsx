import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Bp from "../../../assets/Screen Shot 2022-01-07 at 1.01.05 AM.png";
import cSharpSnip from "../../../assets/cSharpsnip.png";
import Markdown from "markdown-to-jsx";

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
  src: ` ${cSharpSnip}`,
})`
  width: 13rem;
  height: 13rem;
  border: 1px solid blue;
  float: left;
  margin: 1vw 2vw;
`;
const HeaderImg1 = styled.img.attrs({
  src: ` ${cSharpSnip}`,
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
        &nbsp;&nbsp;&nbsp;&nbsp;Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ratione quod repudiandae numquam quidem, quae, a
        necessitatibus sapiente consequatur, ex ullam nesciunt.
        <HeaderImg></HeaderImg>
        Possimus dolor atque quis a voluptates beatae quo sit praesentium! Eaque
        odit at quis provident, laboriosam fugiat temporibus nulla, perspiciatis
        molestias dolorem cumque eligendi magnam voluptate voluptates ut porro,
        itaque error corporis. Accusantium harum aperiam rerum maiores fuga
        fugit iusto! Aliquam, non ullam qui corporis odio sapiente hic vel
        deleniti? Fugit pariatur error adipisci quos? In qui, iste accusantium,
        {/* <Markdown children={input}></Markdown> */}
        voluptatum sint vero voluptatibus mollitia cupiditate obcaecati. Quae
        velit minima totam, cum necessitatibus amet laborum. Explicabo
        cupiditate similique exercitationem quae, ullam nemo quidem odit,
        praesentium accusantium voluptatem nulla sint deserunt fugiat? Id, nihil
        deserunt dolor voluptas ipsum quod! Aspernatur, qui magnam
        necessitatibus consequatur eum ut? Excepturi illo ullam iusto eius
        quaerat rerum illum blanditiis nemo repellendus aut, quod sapiente
        officiis perspiciatis totam sint, dolorem quis natus iste iure? Natus
        odio inventore, obcaecati illum provident quod? Fugiat, consequuntur
        necessitatibus, libero, inventore voluptas voluptatibus aperiam totam
        iste quisquam obcaecati veniam optio nemo dicta quaerat! Aut dolorum id
        iure voluptas culpa? Amet placeat explicabo dolor reiciendis facere
        possimus? Exercitationem itaque ab
        <HeaderImg1></HeaderImg1>ipsum molestias corrupti incidunt enim odio
        eius numquam quam, consequatur perspiciatis iste minima in. Reiciendis,
        excepturi natus. Quam doloribus unde dolor, libero dolores ab magnam
        provident culpa.
      </StyledP>
    </StyledContainer>
  );
};

export default GraphQl;
