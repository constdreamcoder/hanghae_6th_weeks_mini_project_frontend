import React from "react";

// style
import styled from "styled-components";
import "./HeadLogo.css";

// elements
import { Grid, Button, Image, Text } from "../elements";

const Head = (props) => {
  return (
    <React.Fragment>
      {/* <Grid is_flex bg="yellow" padding=" 0px 0.8rem" position="sticky"> */}
      <HeadContainer>
        <Grid is_flex with="auto">
          <Image
            src="https://thumbs.dreamstime.com/b/fridge-refrigerator-icon-comic-style-freezer-container-vector-cartoon-illustration-pictogram-fridge-business-concept-splash-160335838.jpg"
            size={100}
            shape="circle"
          />
          <HeadLogo className="headLogo">
            <span>냉</span>
            <span>장</span>
            <span>고</span>
            <span>를</span>
            <br />
            <span>부</span>
            <span>탁</span>
            <span>해</span>
          </HeadLogo>
          <Grid>
            <Text></Text>
          </Grid>
        </Grid>
        <Grid is_flex width="30%">
          <Button bg="rgb(38, 194, 129)" margin="0px 20px 0px 0px">
            로그인
          </Button>
          <Button bg="rgb(38, 194, 129)">회원가입</Button>
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
  padding: 0px 0.8rem;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;
`;

const HeadLogo = styled.h1`
  margin-left: -0.7em;
`;
export default Head;
