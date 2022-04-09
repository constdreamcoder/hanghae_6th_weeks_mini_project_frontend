import React from "react";
import { Grid, Text, Input, Button } from "../elements";
import axios from "axios";
import PFUpload from "../shared/PFUpload";

const Signup = (props) => {

  const [email, setEmail] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("")
  const [profile, setProfile] = React.useState("")
  

  const signup = () => {
    axios.post('https://624ff4c4e3e5d24b34192201.mockapi.io/login', // 미리 약속한 주소
      { // 데이터
        email: email, 
        nickname: nickname,
        password: password,
      }, 
      // {
      //   headers: { 'Authorization': '내 토큰 보내주기' },
      // }
    ).then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });
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