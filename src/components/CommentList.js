import React from "react";

// elements
import { Grid, Image, Text, Input, Button } from "../elements";

// packages
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

// shared
import Permit from "../shared/Permit";

const CommentList = (props) => {
    const { postId } = props;
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);
    console.log(is_login);

  const login_email = useSelector((state) => state.user.user?.email);
  const login_nickname = useSelector((state) => state.user.user?.nickname);
  console.log(login_email, login_nickname);

  const comment_list = useSelector((state) => state.comment.list);
  console.log(comment_list);

  // 로그인한 계정의 댓글 개수
  const login_comments_count = comment_list.filter(
    (comment) =>
      login_email === comment.email && login_nickname === comment.nickname
  ).length;
  console.log(login_comments_count);

  // 전체 댓글 개수
  let comments_count = comment_list.length;
  console.log(comments_count);

  const [comment, setComment] = React.useState("");
  const [clickedCommentId, setclickedCommentId] = React.useState("");
  let token = localStorage.getItem("token");
  // 댓글 전송
  const sendComment = () => {
    console.log(token);
    console.log(is_login);
    if (is_login) {
      if (comment === "") {
        window.alert("내용이 비어있어요!! 내용을 채워주세요!!");
        return;
      }
      if (clickedCommentId) {
        window.alert("댓글 수정이 완료 되었습니다.");
        dispatch(commentActions.editCommentDB(clickedCommentId, comment));
      } else {
        dispatch(commentActions.sendCommentDB(comment, postId, login_nickname));
      }
    } else {
      window.alert("로그인부터 해주세요!!");
      history.replace("/login");
    }
    setComment("");
  };

  React.useEffect(() => {
    console.log("댓글 가져오기");
    dispatch(commentActions.getCommentsDB(postId));
  }, []);

  return (
    <React.Fragment>
      <Grid padding="30px" overflow="visible">
        <Grid>
          <Text>댓글 {comments_count}개</Text>
        </Grid>
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
        <Grid padding="16px" overflow="visible">
          {comment_list.map((comment, idx) => (
            <CommentItem
              key={idx}
              setComment={setComment}
              setclickedCommentId={setclickedCommentId}
              login_email={login_email}
              login_nickname={login_nickname}
              {...comment}
            ></CommentItem>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const {
    _postId,
    postId,
    commentId,
    nickname,
    profile,
    comment,
    createdAt,
    email,
    login_email,
    login_nickname,
  } = props;
  const dispatch = useDispatch();

  let visibility = "hidden";
  if (login_email === email && login_nickname === nickname) {
    visibility = "visible";
  }

  const editComment = () => {
    props.setComment(comment);
    props.setclickedCommentId(commentId);
  };
  const deleteComment = () => {
    // dispatch(commentActions.getCommentsDB(_postId));
    dispatch(commentActions.deleteCommentDB(commentId));
  };

  return (
    <React.Fragment>
      <Grid is_flex width="113%">
        <Grid is_flex width="10%">
          <Text margin="0px 10px" bold>
            {nickname}
          </Text>
        </Grid>
        <Grid is_flex margin="0px 4px">
          <Text margin="0px 5px">{comment}</Text>
          <Text margin="0px">{createdAt}</Text>
        </Grid>
        <Grid
          width="15%"
          margin="2px 0px 0px 0px"
          is_flex
          visibility={visibility}
        >
          <Button bg="#2196f3" margin="0px 2% 0px 2%" _onClick={editComment}>
            수정
          </Button>
          <Button bg="#2196f3" _onClick={deleteComment}>
            삭제
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
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
