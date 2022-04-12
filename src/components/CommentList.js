import React from "react";

// elements
import { Grid, Image, Text, Input, Button } from "../elements";

// packages
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  let is_login = false;

  const comment_list = useSelector((state) => state.comment.list);
  console.log(comment_list);
  // const postId = comment_list[0].postId;
  // console.log(postId);

  const [comment, setComment] = React.useState("");
  const [clickedCommentId, setclickedCommentId] = React.useState("");

  // 댓글 전송
  const sendComment = () => {
    if (is_login) {
      console.log(clickedCommentId, comment);
      dispatch(commentActions.editCommentDB(clickedCommentId, comment));
    } else {
      console.log("댓글전송!");
      dispatch(commentActions.sendCommentDB(comment));
    }
    setComment("");
    // window.location.reload();
  };

  React.useEffect(() => {
    // 댓글을 가져온다.
    if (comment_list.length > 0) {
      dispatch(commentActions.getCommentsDB("aaa"));
    }
  }, []);

  return (
    <React.Fragment>
      <Grid padding="30px">
        <Grid is_flex>
          <Button
            width="20%"
            margin="0px 20px 0px 0px"
            text="요리를 추천해주세요!!"
            _onClick={sendComment}
          ></Button>
          <Input
            type="text"
            _onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
          />
        </Grid>
        <Grid padding="16px">
          {comment_list.map((comment, idx) => (
            <CommentItem
              key={idx}
              setComment={setComment}
              setclickedCommentId={setclickedCommentId}
              {...comment}
              // _postId={postId}
            ></CommentItem>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { _postId, postId, commentId, nickname, profile, comment, createdAt } =
    props;
  // console.log(_postId);
  const dispatch = useDispatch();

  const editComment = () => {
    props.setComment(comment);
    props.setclickedCommentId(commentId);
  };
  const deleteComment = () => {
    // dispatch(commentActions.getCommentsDB(_postId));
    dispatch(commentActions.deleteCommentDB(commentId));
  };

  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image shape="circle"></Image>
        <Text margin="0px 10px" bold>
          {nickname}
        </Text>
      </Grid>
      <Grid is_flex margin="0px 4px">
        <Text margin="0px 5px">{comment}</Text>
        <Grid margin="0px 0px 0px 50%" width="15%" is_flex>
          <Button margin="0px 15% 0px 0px" bg="#2196f3" _onClick={editComment}>
            수정
          </Button>
          <Button bg="#2196f3" _onClick={deleteComment}>
            삭제
          </Button>
        </Grid>
        <Text margin="0px">{createdAt}</Text>
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
