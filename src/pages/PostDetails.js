import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";

// style
import styled from "styled-components";

// elements
import { Grid, Image, Button, Text, Input } from "../elements";

//components
import BodyContainer from "../components/BodyContainer";
import CommentList from "../components/CommentList";
import Post from "../components/Post";

const PostDetails = (props) => {
    const dispatch = useDispatch();
    const params_postId = props.match.params.postId;
    const post_list = useSelector((state) => state.post.list);
    const this_post = post_list.find((post) => post.postId === params_postId);
    const userInfo = useSelector((state) => state.user.user);
    const is_login = useSelector((state) => state.user.is_login);

    console.log(userInfo);

    const deletePost = () => {
        dispatch(postActions.deletePostFB(this_post.postId));
    };

    return (
        <React.Fragment>
            <BodyContainer>
                <Grid>
                    <Grid width="auto" center="center" margin="0 0 48px">
                        <Text bold display="block">
                            {this_post.nickname}
                        </Text>
                        <Text size="60px" bold>
                            {this_post.title}
                        </Text>
                        <Text display="block" color="rgba(0,0,0,0.7)">
                            식재료: {this_post.item}
                        </Text>
                        <Text display="block" color="rgba(0,0,0,0.4)">
                            {this_post.createdAt}
                        </Text>
                    </Grid>
                </Grid>
                <Image
                    paddingTop="40%"
                    shape="rectangle"
                    src={this_post.image}
                    backgroundSize="contain"
                />
                <Grid padding="60px" center="center">
                    <Text display="block">{this_post.content}</Text>
                </Grid>
                {is_login ? (
                    this_post.nickname === userInfo.nickname ? (
                        <Grid center="center">
                            <Button
                                width="64px"
                                margin="0 8px 0"
                                display="inline"
                                _onClick={() =>
                                    history.push(`/write/${this_post.postId}`)
                                }
                            >
                                수정하기
                            </Button>
                            <Button
                                width="64px"
                                display="inline"
                                _onClick={deletePost}
                            >
                                삭제하기
                            </Button>
                        </Grid>
                    ) : null
                ) : null}
                <CommentList postId={this_post.postId} />
            </BodyContainer>

            {/* <Post {...this_post} is_me /> */}
            {/* is_me에 유저정보로 식별 추가 */}
        </React.Fragment>
    );
};

export default PostDetails;