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
    const user_info = useSelector((state) => state.user);
    console.log(this_post);

    // React.useEffect

    const deletePost = () => {
        dispatch(postActions.deletePostFB(this_post.postId));
    };

    return (
        <React.Fragment>
            <BodyContainer>
                <Grid center="center">
                    {user_info.is_login && (
                        <Grid>
                            <button
                                onClick={() =>
                                    history.push(`/write/${this_post.postId}`)
                                }
                            >
                                수정하기
                            </button>
                            <button onClick={deletePost}>삭제하기</button>
                        </Grid>
                    )}
                    <Text size="60px" bold>
                        {this_post.title}
                    </Text>
                </Grid>
                <Grid is_flex>
                    <Grid is_flex width="auto">
                        <Image margin="0px 10px 0px 0px" shape="circle" />
                        <span>닉네임</span>
                    </Grid>
                    <span>{this_post.createdAt}</span>
                </Grid>
                <Image
                    paddingTop="40%"
                    shape="rectangle"
                    src={this_post.image}
                />
                <Grid padding="60px">
                    <Input
                        multiLine
                        label="식재료 목록"
                        placeholder="식재료를 입력해주세요!!"
                        value={this_post.item}
                    ></Input>
                    <Input
                        multiLine
                        label="코멘트"
                        placeholder="코멘트를 입력해주세요!!"
                        value={this_post.content}
                    ></Input>
                </Grid>
                <CommentList postId={this_post.postId} />
            </BodyContainer>

            {/* <Post {...this_post} is_me /> */}
            {/* is_me에 유저정보로 식별 추가 */}
        </React.Fragment>
    );
};

export default PostDetails;
