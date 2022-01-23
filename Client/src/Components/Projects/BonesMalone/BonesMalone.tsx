import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BM from "../../../assets/Screen Shot 2022-01-19 at 3.20.06 PM.png";
import eStore from "../../../assets/e-store.png";

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
`;
const HeaderImg1 = styled.img.attrs({
  src: ` ${eStore}`,
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
        Bones Malone
        <a
          style={{ textDecoration: "none", color: "#666" }}
          target="_blank"
          href="https://github.com/Coffey-May/e-store"
        >
          <i
            className="devicon-github-original"
            style={{ fontSize: "1em", paddingLeft: "1em" }}
          ></i>
        </a>
      </StyledHeader>
      <hr />
      <StyledP style={width < 900 ? { columnCount: 1 } : { columnCount: 2 }}>
        &nbsp;&nbsp;&nbsp;&nbsp;This Fully functional JAM stack E-Commerce
        application leverages Stripe and CommerceJS, to provide the user with
        the affordances to purchase gourmet dog treats.
        <HeaderImg></HeaderImg>
        The Chec.io CMS is utilized for the admin to update products and their
        quantities. Users can then select products and populate their shoppiing
        cart. Once the user is ready for checkout they are presented with a
        Stripe multi-step form component that collects their necessary
        information to complete the order. Once the order is placed, the product
        quantities are maintained in state, and both the admin and customer
        recieve confirmation emails with the order information.<br></br>
        <HeaderImg1></HeaderImg1>
        <strong style={{ color: "#888" }}>
          The shape of the order object that is recieved by CommerceJS.
        </strong>
      </StyledP>
    </StyledContainer>
  );
};

export default GraphQl;
