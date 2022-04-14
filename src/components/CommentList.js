import React from "react";

// elements
import { Grid, Image, Text, Input, Button } from "../elements";

// packages
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

// shared

const CommentList = (props) => {
    const { postId } = props;
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);
    console.log(is_login);

    const comment_list = useSelector((state) => state.comment.list);
    console.log(comment_list);

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
                dispatch(
                    commentActions.editCommentDB(clickedCommentId, comment)
                );
            } else {
                window.alert("댓글 전송 완료!!");
                dispatch(commentActions.sendCommentDB(comment, postId));
            }
        } else {
            window.alert("로그인부터 해주세요!!");
            history.replace("/login");
        }
        setComment("");
    };

    React.useEffect(() => {
        console.log("댓글 가져오기");
        // 댓글을 가져온다.
        // if (comment_list.length >= 0) {
        dispatch(commentActions.getCommentsDB(postId));
        // }
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
    } = props;
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
                <Text margin="0px 10px" bold>
                    {nickname}
                </Text>
            </Grid>
            <Grid is_flex margin="0px 4px">
                <Grid margin="0px 0px 0px 12px" width="60%" is_flex>
                    <Text margin="0px 5px">{comment}</Text>
                </Grid>
                <Grid margin="0px 0px 0px 12px" width="25%" is_flex>
                    <Text margin="0px">{createdAt}</Text>
                </Grid>
                <Grid margin="0px 0px 0px 12px" width="15%" is_flex>
                    <Button
                        bg="white"
                        color="rgba(0,0,0,0.8)"
                        _onClick={editComment}
                    >
                        수정
                    </Button>
                    <Button bg="white" color="#ff1b3b" _onClick={deleteComment}>
                        삭제
                    </Button>
                </Grid>
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
