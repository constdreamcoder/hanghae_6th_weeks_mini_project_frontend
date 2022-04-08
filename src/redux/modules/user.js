import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

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

// middleware actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    // 로그인 후 인증상태 지속
    console.log('loginFB')
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    console.log('signupFB')
  };
};

// 로그인 체크를 해서 새로고침하면 데이터가 날아가버리는 리덕스에 다시 데이터를 집어 넣는다.
const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    console.log('loginCheckFB')
  };
};

const logoutFB = () => {
  return function (dispatch, getState, { history }) {
    console.log('loginCheckFB')
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
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
