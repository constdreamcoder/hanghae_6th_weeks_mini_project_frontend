import React from "react";
import { Grid, Text, Input, Button } from "../elements";
import axios from "axios";
import PFUpload from "../shared/PFUpload";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";


const Signup = (props) => {

  const dispatch = useDispatch()

  const [email, setEmail] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("")
  const [profile, setProfile] = React.useState("")
  
  const signup = () => {
    console.log('--Run Sign up')
    if (email === "" || nickname === "" || password === "" || passwordCheck === "" || profile === "") {
      return;
    }
    if (password !== passwordCheck) {
      return;
    }
    dispatch(userActions.signupFB(email, nickname, password, profile));
    alert("가입 완료!");
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
            type="password"
          />
        </Grid>
        <Grid padding="16px 0px">
          <PFUpload />
        </Grid>
        <Grid padding="16px 0px">
          <Button text="회원가입하기" _onClick={signup}></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;