import React from "react";

// components
import Card from "./Card";
import { Grid, Button } from "../elements";
import CustomMenu from "./CustomMenu";
import Permit from "../shared/Permit";

// style
import styled from "styled-components";

//packages
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";

const CardList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);

    const moveToDetails = (postId) => {
        history.push(`/detail/${postId}`);
    };

    React.useEffect(() => {
        dispatch(postActions.getPostFB());
    }, []);

    return (
        <React.Fragment>
            <CardWarapper>
                <Permit>
                    <CustomMenu />
                </Permit>
                <CardGrid>
                    {post_list.map((post, idx) => {
                        return (
                            <Card
                                key={post.postId}
                                {...post}
                                _onClick={() => {
                                    moveToDetails(post.postId);
                                }}
                            />
                        );
                    })}
                </CardGrid>
            </CardWarapper>
        </React.Fragment>
    );
};

const CardWarapper = styled.div`
    // border: 1px solid red;
    padding: 80px 0;
`;

const CardGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 48px;
    @media screen and (max-width: 1200px) {
        gap: 32px;
        grid-template-columns: auto;
    }
`;
export default CardList;
