import React from "react";

// components
import Card from "./Card";
// import { Grid, Button } from "../elements";

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
    //my list
    // const [count, setCount] = React.useState(0);
    // console.log(count);

    // const selectCategory = () => {
    //     setCount(count + 1);
    // };
    //my list 끝
    React.useEffect(() => {
        // if (count % 2 === 1) {
        //     dispatch(postActions.setMypostFB());
        // } else {
        dispatch(postActions.getPostFB());
    }, []);

    return (
        <React.Fragment>
            <CardWarapper>
                {/* <Grid margin="50px" width="100px">
                    <Button _onClick={selectCategory}>my</Button>
                </Grid> 마이페이지 관련 */}
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
`;

const CardGrid = styled.div`
    // border: 1px solid green;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    @media screen and (max-width: 718px) {
        gap: 3px;
    }
`;
export default CardList;
