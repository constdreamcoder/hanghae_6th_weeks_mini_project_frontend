import React from "react";

// elements
import { Grid, Image, Button, Text } from "../elements";

// style
import styled from "styled-components";

const Card = (props) => {
  return (
    <React.Fragment>
      <CardContainer>
        <CardBox>
          <Image shape="rectangle" />
          <Grid height="auto" is_flex width="auto" margin="10px 10px">
            <Image display="inline-block" margin="0" />
            <Text margin="0px 0px 0px -10rem" bold>
              닉네임
            </Text>
            <Text margin="0px 5px 0px 0px" size="1.75rem" color="red">
              ❤
            </Text>
          </Grid>
          <Grid
            margin="0px 10px"
            height="50px"
            width="auto"
            position="relative"
          >
            <Text margin="5px 0px" position="absolute">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Grid>
          <Grid height="auto" is_flex width="auto" margin="10px 10px">
            <Button>수정</Button>
            <Button>삭제</Button>
            <Button>바로가기</Button>
          </Grid>
        </CardBox>
      </CardContainer>
    </React.Fragment>
  );
};

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: yellow;
  border-radius: 20px;
  position: relative;
  // border: 1px solid black;
`;

const CardBox = styled.div`
  // border: 1px solid blue;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default Card;
