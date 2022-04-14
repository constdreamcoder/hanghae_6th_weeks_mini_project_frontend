import React from "react";

// elements
import { Grid, Image, Button, Text } from "../elements";

// style
import styled from "styled-components";

const Card = (props) => {
  // console.log(props);
  const { postId, title, content, item, image, createdAt, _onClick, nickname } = props; // 닉네임, 프로필 사진, 아마 댓글도??
  return (
    <React.Fragment>
      <CardContainer onClick={_onClick}>
        <CardBox>
          <Grid height="auto" width="auto">
            <Image backgroundSize="cover" src={image} shape="rectangle" />
            <CardCover className="cover">
              <CardCover>바로가기</CardCover>
            </CardCover>
          </Grid>

          <Grid height="auto" width="auto" margin="32px" center="center">
            <Text bold display="block" margin="0">
              {nickname}
            </Text>
            <Text wordWarp bold size="1.5rem" display="block">
              {title}
            </Text>
            <Text wordWarp display="block" color="rgba(0,0,0,0.7)">
              식재료: {item}
            </Text>
          </Grid>
        </CardBox>

        {/* <CardCoverLetter>바로가기</CardCoverLetter> */}
      </CardContainer>
    </React.Fragment>
  );
};

Card.defaultProps = {
  _onClick: () => {},
};

const CardContainer = styled.div`
  background-color: white;
  width: 350px;
  height: 540px;
  border-radius: 16px;
  position: relative;

  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: perspective(150px) translateZ(5px);
    box-shadow: -4px 8px 20px rgba(0, 0, 0, 0.505);
    cursor: pointer;
  }
`;

const CardBox = styled.div`
  // border: 1px solid blue;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const CardCover = styled.div`
  width: 100%;
  height: 53%;
  background-color: black;
  // opacity: 0.4;
  display: none;
  display: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 300ms ease-in-out;
`;

const CardCoverLetter = styled.div`
  font-size: 40px;
  position: abosolute;
  top: 0;
  left: 0;
`;

export default Card;
