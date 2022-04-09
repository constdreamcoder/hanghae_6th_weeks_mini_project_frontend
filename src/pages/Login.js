import React from "react";
import { Text, Input, Grid, Button } from "../elements";

const Login = (props) => {

  // id, pwd state 정의
  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  // input 입력 값 받아와서 state 변경
  const changeId = (e) => {
    setId(e.target.value);
  }
  const changePwd = (e) => {
    setPwd(e.target.value);
  }

  // 로그인 func 정의
  const login = () => {
    console.log('로그인 func 작성 필요')
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            type="password"
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={login}
        ></Button>
      </Grid>
    </React.Fragment>
  );
}

export default Login;