import React from "react";

// style
import styled from "styled-components";

// elements
import { Grid, Image, Button, Text, Input } from "../elements";

//components
import BodyContainer from "../components/BodyContainer";
import CommentList from "../components/CommentList";

const PostDetails = (props) => {
  return (
    <React.Fragment>
      <BodyContainer>
        <Grid center="center">
          <Text size="60px" bold>
            제목
          </Text>
        </Grid>
        <Grid is_flex>
          <Grid is_flex width="auto">
            <Image margin="0px 10px 0px 0px" shape="circle" />
            <span>닉네임</span>
          </Grid>
          <span>게시일: 2021-02-28 10:00:00</span>
        </Grid>
        <Image paddingTop="40%" shape="rectangle" />
        <Grid padding="60px">
          <Input
            multiLine
            label="식재료 목록"
            placeholder="식재료를 입력해주세요!!"
          ></Input>
          <Input
            multiLine
            label="코멘트"
            placeholder="코멘트를 입력해주세요!!"
          ></Input>
        </Grid>
        <CommentList />
      </BodyContainer>
    </React.Fragment>
  );
};

export default PostDetails;
