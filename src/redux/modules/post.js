import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Apis } from "../../shared/Api";

import moment from "moment";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));

const initialState = {
  list: [],
};

const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: "mean0",
  //   user_profile:
  //     "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
  // },
  title: "",
  content: "",
  item: "",
  image: "",
  createdAt: "",
  // 추가되어져야 할 항목들
  // nickname: "",
  // profile: "",
  // comments_cnt: "",
};

// middlewares
const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postContents = {
      // ...initialPost,
      // ...contents,
      title: "유느님",
      content:
        "유느님은 자체, 대체 불가능, 감히 어느 안전이라고 유느님을 거스르랴!",
      item: "빛, 찬란, 유느님 그 자체",
      image:
        "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
      createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    Apis.addPost(postContents)
      .then(function (response) {
        //response로 postId랑 유저정보 받아오기 가능할듯 https://github.com/robinyeon/ANABADA/blob/yeon/src/redux/modules/card.js 참고
        console.log(response);
        const addPostContents = {
          ...postContents,
        };

        dispatch(addPost(addPostContents));
        window.alert("게시물이 작성되었습니다!");
        history.replace("/");
      })
      .catch(function (error) {
        // console.log("addPostFB에러", error);

        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        console.log("에러 났어!");
        // console.log(err.toJSON());
        if (error.response) {
          // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
          // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
          // node.js에서는 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
        } else {
          // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };
};

// export const getPostFB =
//     () =>
//     async (dispatch, getState, { history }) => {
//         try {
//             const { data } = await Apis.roadPostList();
//             console.log(data);
//             dispatch(setPost(data));
//         } catch (error) {}
//     };

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    Apis.roadPostList()
      .then(function (response) {
        console.log(response);

        let post_list = response.data.postList.map((post) => {
          let keys = Object.keys(initialPost);

          let _post = keys.reduce(
            (acc, cur) => {
              return { ...acc, [cur]: post[cur] };
            },
            { postId: post._id }
          );

          return _post;
        });

        console.log(post_list);

        dispatch(setPost(post_list));
      })
      .catch(function (error) {
        console.log("getPostFB에러", error);
      });
  };
};

// const editPostFB = (postId, editContents) => {
//     return function (dispatch, getState, { history }) {
//         Apis.editPost(postId, editContents)
//             .then(function (response) {
//                 console.log(response);
//                 const editPostContents = {
//                     ...editContents,
//                     postId: postId,
//                     //postId 변경안되겠지?
//                 };
//                 dispatch(editPost(editPostContents));
//                 window.alert("게시물이 수정되었습니다!");
//                 history.replace(`/detail/${postId}`);
//             })
//             .catch(function (error) {
//                 console.log("editPostFB에러", error);
//             });
//     };
// };

export const editPostFB =
  (postId, editContents) =>
  async (dispatch, getState, { history }) => {
    try {
      await Apis.editPost(postId, editContents);
      const editPostContents = {
        ...editContents,
        postId: postId,
      };
      dispatch(editPost(editPostContents));
      history.replace(`/detail/${postId}`);
    } catch (error) {
      console.log(error);
    }
  };

const deletePostFB = (postId) => {
  return function (dispatch, getState, { history }) {
    Apis.deletePost(postId)
      .then(function (response) {
        console.log(response);
        dispatch(deletePost(postId));
        history.replace("/");
      })
      .catch(function (error) {
        console.log("editPostFB에러", error);
      });
  };
};
// export const deletePostFB =
//     (postId) =>
//     async (dispatch, getState, { history }) => {
//         console.log("==삭제시작==", postId);
//         try {
//             await Apis.deletePost(postId);
//             history.replace("/");
//         } catch (error) {
//             console.log(error);
//         }
//     };

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let editIndex = draft.list.findIndex(
          (post) => post.postId === action.payload.post.postId
        );

        draft.list[editIndex] = {
          ...draft.list[editIndex],
          ...action.payload.post,
        };
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.postId);
        let deleteIndex = draft.list.findIndex(
          (post) => post.postId === action.payload.postId
        );
        console.log(state.post);
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  editPost,
  getPostFB,
  addPostFB,
  editPostFB,
  deletePostFB,
};

export { actionCreators };
