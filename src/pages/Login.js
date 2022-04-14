import React from "react";
import { Text, Input, Grid, Button, Form } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import styled from "styled-components";


const Login = (props) => {
    const dispatch = useDispatch();

    // id, pwd state 정의
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    // 로그인 func 정의
    const login = () => {
        if (email === "" || password === "") {
            window.alert("아이디 혹은 비밀번호가 비어있습니다. 입력해주세요.");
            return;
        }
        dispatch(userActions.loginFB(email, password));
    };

    return (
        <React.Fragment>
            <Grid padding="16px">
                <Form>
                    <Grid center="center">
                        <Text size="32px" bold>
                            로그인
                        </Text>
                    </Grid>
                    <Grid padding="16px 0px">
                        <Input
                            label="이메일"
                            placeholder="이메일을 입력해주세요."
                            _onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid padding="16px 0px">
                        <Input
                            label="패스워드"
                            placeholder="패스워드 입력해주세요."
                            _onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                        />
                    </Grid>
                    <Grid padding="16px 0px">
                        <Button text="로그인하기" _onClick={login}></Button>
                    </Grid>
                </Form>
            </Grid>
        </React.Fragment>
    );
};

export default Login;
