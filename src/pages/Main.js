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
      <BodyContainer>
        <Body />
        <Footer />
      </BodyContainer>
    </React.Fragment>
  );
};

const BodyContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  min-height: 100vh;
`;
export default Main;
