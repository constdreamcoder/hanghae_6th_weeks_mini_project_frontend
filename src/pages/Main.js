import React from "react";

// components
import Body from "../components/Body";
import BodyContainer from "../components/BodyContainer";
import Footer from "../components/Footer";

//elements
import { Button } from "../elements";

// style
import styled from "@emotion/styled";

const Main = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        <BodyContainer>
          <Body />
        </BodyContainer>
        <Footer />
      </Wrapper>
      <Button is_float text="+"></Button>
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

export default Main;
