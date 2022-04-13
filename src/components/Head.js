import React from "react";

// style
import styled from "styled-components";
import "./HeadLogo.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

// elements
import { Grid, Button, Image, Text } from "../elements";

import { history } from "../redux/configureStore";
// import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Head = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const userInfo = useSelector((state) => state.user.user);

  const logout = () => {
    console.log("-- Run logout");
    dispatch(userActions.logoutFB());
  };

  const moveToHome = () => {
    history.replace("/");
  };

  return (
    <React.Fragment>
      {/* <Grid is_flex bg="yellow" padding=" 0px 0.8rem" position="sticky"> */}
      <HeadContainer>
        <Grid is_flex with="auto">
          <Image
            src="https://thumbs.dreamstime.com/b/fridge-refrigerator-icon-comic-style-freezer-container-vector-cartoon-illustration-pictogram-fridge-business-concept-splash-160335838.jpg"
            size={100}
            shape="circle"
            _onClick={moveToHome}
          />
          <HeadLogo className="headLogo">
            <span>냉</span>
            <span>장</span>
            <span>고</span>
            <span>를</span>
            <br />
            <span>부</span>
            <span>탁</span>
            <span>해</span>
          </HeadLogo>
          <Grid>
            <Text></Text>
          </Grid>
        </Grid>
        <Grid is_flex width="30%">
          {is_login ? (
            <React.Fragment>
              <Grid>
                <Text>{userInfo.nickname}</Text>
              </Grid>
              <Button bg="rgb(38, 194, 129)" _onClick={logout}>
                로그아웃
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button
                bg="rgb(38, 194, 129)"
                margin="0px 20px 0px 0px"
                _onClick={() => {
                  history.push("/login");
                }}
              >
                로그인
              </Button>
              <Button
                bg="rgb(38, 194, 129)"
                _onClick={() => {
                  history.push("/signup");
                }}
              >
                회원가입
              </Button>
            </React.Fragment>
          )}
        </Grid>
      </HeadContainer>

      {/* </Grid> */}
    </React.Fragment>
  );
};

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0.8rem;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;
`;

const HeadLogo = styled.h1`
  margin-left: -0.7em;
`;
export default Head;
