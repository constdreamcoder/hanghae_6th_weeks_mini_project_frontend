import React from "react";
import { Grid, Text, Input, Button } from "../elements";
import axios from "axios";
// import Upload from "../shared/Upload";

const Signup = (props) => {

  const [id, setID] = React.useState("");
  const [user_name, setUserName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("")
  const [profile, setProfile] = React.useState("")
  

  const signup = () => {
    // input 값 테스트 해보기
    console.log(id, user_name, pwd, pwd_check, profile)

    
    axios.post('https://624ff4c4e3e5d24b34192201.mockapi.io/login', // 미리 약속한 주소
      { // 데이터
        email: id, 
        nickname: user_name,
        password: pwd,
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
              setID(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            type="password"
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
            type="password"
          />
        </Grid>

        {/* <Upload /> */}

        <Button text="회원가입하기" _onClick={signup}></Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
