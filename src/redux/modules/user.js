import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER"; // login과 signup 모두 사용자의 정보를 등록하여야 하기 때문이다.

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  user_name: "mean0",
};

const signupFB = (email, nickname, password, profile) => {
  return function (dispatch, getState, { history }) {
    console.log('--Run signupFB')

    axios.post('https://624ff4c4e3e5d24b34192201.mockapi.io/islogin', // 미리 약속한 주소
    { // 데이터
      email: email, 
      nickname: nickname,
      password: password,
      profile: profile,
    })
    .then(function (response) {
      console.log('--singnUpFB api call Success');
      console.log(response);
      // 응답이 잘 들어왔으면 store에 있는 user라는 state를 dispatch 해주기

      // 여기에 displayName을 email로 변경해주기 (확인 필요)
      // 그러고 나서, then으로 이어서 하단을 실행해야 하는데 이것도 확인 필요
      dispatch(
        setUser({
          email: response.userInfo.email,
          nickname: response.userInfo.nickname,
          profile: response.userInfo.profile,
        })
      );
      history.push("/");
    })
    .catch(function (error) {
      console.log('--singnUpFB api call Fail');
      console.log(error);
      alert(`회원가입에 실패하였습니다.`)
    });
  };
};

// middleware actions
const loginFB = (email, password) => {
  return function (dispatch, getState, { history }) {
    // 로그인 후 인증상태 지속
    console.log('--Run loginFB');
    // console.log(email, password);
    axios.post('https://624ff4c4e3e5d24b34192201.mockapi.io/login', // 미리 약속한 주소
      { // 데이터
        email: email, 
        password: password,
      }
    ).then(function (response) {
        console.log('--login api call Success');
        console.log(response);
        localStorage.setItem("token", response.token);
        dispatch(
          setUser({
            email: response.userInfo.email,
            nickname: response.userInfo.nickname,
            profile: response.userInfo.profile,
          })
        );
        history.push("/")
      })
    .catch(function (error) {
      console.log("아이디 혹은 비밀번호가 맞지 않습니다." + error);
      alert("아이디 혹은 비밀번호가 맞지 않습니다.")
    });
  };
};

// 로그인 체크를 해서 새로고침하면 데이터가 날아가버리는 리덕스에 다시 데이터를 집어 넣는다.
const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    console.log('--Run loginCheckFB');
    // /islogin 호출
    axios.post('https://624ff4c4e3e5d24b34192201.mockapi.io/islogin', // 미리 약속한 주소
    {
      // token: localStorage.getItem("token"),
    }, 
    {
      // localStorage에 있는 토큰을 get함
      headers: { 'Authorization': localStorage.getItem("token") },
    }
    ).then(function (response) {
      console.log('--islogin api call Success');
      console.log(response);
      // 응답이 잘 들어왔으면 store에 있는 user라는 state를 dispatch 해주기
      dispatch(
        setUser({
          email: response.userInfo.email,
          nickname: response.userInfo.nickname,
          profile: response.userInfo.profile,
        })
      )
      console.log(getState().user.email)
    })
    .catch(function (error) {
      console.log('--islogin api call Fail');
      console.log(error);
      // 올바른 토큰이 아닐 경우 로그아웃 처리
      dispatch(logOut());
    });
  };
};

const logoutFB = () => {
  return function (dispatch, getState, { history }) {
    console.log('-- Run loginoutFB')
    // auth.signOut().then(() => {
    //   dispatch(logOut());
    //   history.replace("/");
    // });
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
    produce(state, (draft) => {
      draft.user = action.payload.user;
      draft.is_login = true;
      }
    ),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
      draft.user = null;
      draft.is_login = false;
      }
    ),
    [GET_USER]: (state, action) => 
      produce(state, (draft) => {
      }
    ),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  getUser,
  signupFB,
  loginFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };
