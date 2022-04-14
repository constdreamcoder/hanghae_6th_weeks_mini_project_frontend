import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState("");
    const [nickname, setNickname] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");


    const signup = () => {
      console.log('--Run Sign up')
      if (password !== confirmPassword) {
        alert("입력한 비밀번호가 서로 다릅니다.");;
      }
      else {
        console.log(email, nickname, password);
        dispatch(userActions.signupFB(email, nickname, password, confirmPassword));
      }
    }

    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold>
                    회원가입
                </Text>

                <Grid padding="16px 0px">
                    <Input
                        label="이메일"
                        placeholder="이메일 주소를 입력해주세요."
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
              setConfirmPassword(e.target.value);
            }}
            type="password"
          />
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
