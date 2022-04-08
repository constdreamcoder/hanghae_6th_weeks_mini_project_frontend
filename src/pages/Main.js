import React from "react";

// components
import Head from "../components/Head";

// elements
import { Grid, Text } from "../elements";

// components
import Body from "../components/Body";
import Footer from "../components/Footer";

// style
import styled from "@emotion/styled";

const Main = (props) => {
  return (
    <React.Fragment>
      <Head />
      <Wrapper>
        <BodyContainer>
          <Body />
        </BodyContainer>
        <Footer />
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100vh;
`;

const BodyContainer = styled.div`
  max-width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default Main;
