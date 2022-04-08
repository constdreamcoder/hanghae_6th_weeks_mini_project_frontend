import React from "react";

// style
import styled from "styled-components";

// elements
import { Grid, Button, Image } from "../elements";

const Head = (props) => {
  return (
    <React.Fragment>
      {/* <Grid is_flex bg="yellow" padding=" 0px 0.8rem" position="sticky"> */}
      <HeadContainer>
        <Grid>
          <Image size={100} shape="circle" />
        </Grid>
        <Grid is_flex>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </Grid>
      </HeadContainer>

      {/* </Grid> */}
    </React.Fragment>
  );
};

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;
`;
export default Head;
