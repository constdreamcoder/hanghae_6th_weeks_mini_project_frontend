import React from "react";

// components
import Body from "../components/Body";
import BodyContainer from "../components/BodyContainer";
import Footer from "../components/Footer";

// style
import styled from "@emotion/styled";

//추가한부분
import { useSelector, useDispatch } from "react-redux";

import Post from "../components/Post";
import { Grid } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
//추가한 부분 끝

const Main = (props) => {
    // 추가한 부분
    const post_list = useSelector((state) => state.post.list);

    const { history } = props;

    // 추가한부분 끝

    return (
        <React.Fragment>
            <Wrapper>
                <BodyContainer>
                    <Body />
                </BodyContainer>
                {/* 추가한 부분 */}
                <Grid bg="#EFF6FF" padding="40px 0px 0px">
                    {post_list.map((post, index) => {
                        return (
                            <Grid
                                key={post.postId}
                                _onClick={() => {
                                    history.push(`/detail/${post.postId}`);
                                }}
                            >
                                <Post {...post} />
                            </Grid>
                        );
                    })}
                </Grid>
                {/* 추가한 부분 끝 */}
                <Footer />
            </Wrapper>
        </React.Fragment>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
`;

export default Main;
