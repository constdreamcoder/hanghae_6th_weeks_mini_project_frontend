import React from "react";

// components
import Body from "../components/Body";
import BodyContainer from "../components/BodyContainer";
import Footer from "../components/Footer";

//elements

// style
import styled from "@emotion/styled";

// shared
import Permit from "../shared/Permit";

//추가한부분
import { useSelector, useDispatch } from "react-redux";

import Post from "../components/Post";
import { Grid, Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
//추가한 부분 끝

const Main = (props) => {
  // 추가한 부분
  // const post_list = useSelector((state) => state.post.list);

  const { history } = props;

  // 추가한부분 끝

  return (
    <React.Fragment>
      <Wrapper>
        <BodyContainer>
          <Body />
        </BodyContainer>
        <Footer />
      </Wrapper>
      <Permit>
        <Button
          is_float
          text="+"
          _onClick={() => {
            history.push(`/write`);
          }}
        ></Button>
      </Permit>
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
