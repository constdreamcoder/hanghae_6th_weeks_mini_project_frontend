import React from "react";

// components
import Card from "./Card";

// style
import styled from "styled-components";

//packages
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";

const CardList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  React.useEffect(() => {
    dispatch(postActions.getPostFB());
  }, []);

  const moveToDetails = (postId) => {
    console.log(postId);
    history.push(`/detail/${postId}`);
  };

  return (
    <React.Fragment>
      <CardWarapper>
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
