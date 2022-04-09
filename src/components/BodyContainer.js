import React from "react";

// stlye
import styled from "styled-components";

const BodyContainer = (props) => {
  return (
    <React.Fragment>
      <Container>{props.children}</Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  max-width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export default BodyContainer;
