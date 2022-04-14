import React from "react";
import { Grid, Text, Input, Button, Image, Form } from "../elements";
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
      if (password !== confirmPassword) {
        alert("입력한 비밀번호가 서로 다릅니다.");;
      }
      else {
        dispatch(userActions.signupFB(email, nickname, password, confirmPassword));
      }
    }

    return (
        <React.Fragment>
          <Form>
            <Grid padding="16px">
                <Grid padding="0 0 20px 0" center="center">
                  <Text size="32px" bold>
                      회원가입
                  </Text>
                </Grid>

                <Grid padding="16px 0px">
                    <Input
                        label="이메일"
                        placeholder="naengjango@gmail.com"
                        _onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </Grid>

                <Grid padding="16px 0px">
                    <Input
                        label="닉네임"
                        placeholder="3글자 이상의 알파벳과 숫자"
                        _onChange={(e) => {
                            setNickname(e.target.value);
                        }}
                    />
                </Grid>

                <Grid padding="16px 0px">
                    <Input
                        label="비밀번호"
                        placeholder="4글자 이상"
                        _onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                    />
                </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호 재입력"
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
      </Form>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
