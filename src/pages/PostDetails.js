import React from "react";

// style
import styled from "styled-components";

// elements
import { Grid, Image, Button, Text, Input } from "../elements";

//components
import BodyContainer from "../components/BodyContainer";
import CommentList from "../components/CommentList";
import Post from "../components/Post";
import { useSelector } from "react-redux";

const PostDetails = (props) => {
    const params_postId = props.match.params.postId;
    console.log(params_postId);
    const post_list = useSelector((state) => state.post.list);
    console.log(post_list);
    const this_post = post_list.find((post) => post.postId === params_postId);
    console.log(this_post);

    return (
        <React.Fragment>
            <BodyContainer>
                <Grid is_flex>
                    <Post {...this_post} is_me />
                    {/* is_me에 유저정보로 식별 추가 */}
                </Grid>
                <CommentList />
            </BodyContainer>
        </React.Fragment>
    );
};

export default PostDetails;
