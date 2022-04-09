import React from "react";
import { Grid, Image, Text, Input, Button } from "../elements";

const CommentList = (props) => {
  return (
    <React.Fragment>
      <Grid padding="30px">
        <Grid is_flex>
          <Button
            width="20%"
            margin="0px 20px 0px 0px"
            text="요리를 추천해주세요!!"
          ></Button>
          <Input />
        </Grid>
        <Grid padding="16px">
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
    props;
  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image shape="circle"></Image>
        <Text margin="0px 10px" bold>
          nickname
        </Text>
      </Grid>
      <Grid is_flex margin="0px 4px">
        <Text margin="0px 5px">라면먹고 싶당~~!!!</Text>
        <Text margin="0px">2021-01-01 10:00:00</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  user_profile: "",
  user_name: "mean0",
  user_id: "",
  post_id: 1,
  contents: "귀여운 고양이네요",
  insert_dt: "2021-01-01 19:00:00",
};
