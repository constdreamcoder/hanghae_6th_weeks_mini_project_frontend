// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";

// import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// import { auth } from "../../shared/firebase";
// import firebase from "firebase/app";

// // actions
// const LOG_IN = "LOG_IN";
// const LOG_OUT = "LOG_OUT";
// const GET_USER = "GET_USER";
// const SET_USER = "SET_USER"; // login과 signup 모두 사용자의 정보를 등록하여야 하기 때문이다.

// // action creators
// const logOut = createAction(LOG_OUT, (user) => ({ user }));
// const getUser = createAction(GET_USER, (user) => ({ user }));
// const setUser = createAction(SET_USER, (user) => ({ user }));

// // initialState
// const initialState = {
//   user: null,
//   is_login: false,
// };

// const user_initial = {
//   user_name: "mean0",
// };
// // const logIn = (user) => {
// //     return {
// //         type: LOG_IN,
// //         user
// //     }
// // }

// // middleware actions
// const loginFB = (id, pwd) => {
//   return function (dispatch, getState, { history }) {
//     // 로그인 후 인증상태 지속
//     auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
//       // 로그인 인증
//       auth
//         .signInWithEmailAndPassword(id, pwd)
//         .then((userCredential) => {
//           // Signed in
//           var user = userCredential.user;
//           // ...
//           console.log(user);

//           dispatch(
//             setUser({
//               user_name: user.displayName,
//               id: id,
//               user_profile: "",
//               uid: user.uid,
//             })
//           );

//           history.push("/");
//         })
//         .catch((error) => {
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           console.log(errorCode, errorMessage);
//         });
//     });
//   };
// };

// const signupFB = (id, pwd, user_name) => {
//   return function (dispatch, getState, { history }) {
//     auth
//       .createUserWithEmailAndPassword(id, pwd)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         console.log(user);
//         // ...
//         auth.currentUser
//           .updateProfile({
//             displayName: user_name,
//           })
//           .then(() => {
//             // Update successful
//             // ...
//             dispatch(
//               setUser({
//                 user_name: user_name,
//                 id: id,
//                 user_profile: "",
//                 uid: user.uid,
//               })
//             );
//             history.push("/");
//           })
//           .catch((error) => {
//             // An error occurred
//             // ...

//             console.log(error);
//           });
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         console.log(errorCode, errorMessage);
//         // ..
//       });
//   };
// };

// // 로그인 체크를 해서 새로고침하면 데이터가 날아가버리는 리덕스에 다시 데이터를 집어 넣는다.
// const loginCheckFB = () => {
//   return function (dispatch, getState, { history }) {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         // 로그인이 되어있는 경우
//         dispatch(
//           // 휘발성이 리덕스에 데이터를 집어 넣어준다.
//           setUser({
//             user_name: user.displayName,
//             user_profile: "",
//             id: user.email,
//             uid: user.uid,
//           })
//         );
//       } else {
//         // 로그인이 안되어 있는 경유
//         dispatch(logOut()); // 강제 로그아웃
//       }
//     });
//   };
// };

// const logoutFB = () => {
//   return function (dispatch, getState, { history }) {
//     auth.signOut().then(() => {
//       dispatch(logOut());
//       // 로그아웃 후 메인페이지이거나 로그아웃이후 보여주면 안되는 화면일 수 도 있으므로 replace를 사용
//       // replace 함수는 괄호안의 페이지와 현재 페이지를 바꿔치기 해주는 매서드이다.
//       history.replace("/");
//     });
//   };
// };

// //reducer
// export default handleActions(
//   {
//     [SET_USER]: (state, action) =>
//       produce(state, (draft) => {
//         setCookie("is_login", "success");
//         draft.user = action.payload.user;
//         draft.is_login = true;
//       }),
//     [LOG_OUT]: (state, action) =>
//       produce(state, (draft) => {
//         deleteCookie("is_login");
//         draft.user = null;
//         draft.is_login = false;
//       }),
//     [GET_USER]: (state, action) => produce(state, (draft) => {}),
//   },
//   initialState
// );

// // action creator export
// const actionCreators = {
//   logOut,
//   getUser,
//   signupFB,
//   loginFB,
//   loginCheckFB,
//   logoutFB,
// };

// export { actionCreators };
