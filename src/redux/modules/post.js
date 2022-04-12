import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { Apis } from "../../shared/Api";
import instance from "../../shared/Request";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));

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
};

// middlewares
const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postContents = {
      ...initialPost,
      ...contents,
    };

    // Apis.addPost(postContents)
    //   .then(function (response) {
    //     //response로 postId랑 유저정보 받아오기 가능할듯 https://github.com/robinyeon/ANABADA/blob/yeon/src/redux/modules/card.js 참고
    //     console.log(response);
    //     const addPostContents = {
    //       ...postContents,
    //     };

    //     dispatch(addPost(addPostContents));
    //     window.alert("게시물이 작성되었습니다!");
    //     history.replace("/");
    //   })
    //   .catch(function (error) {
    //     console.log("addPostFB에러", error);
    //   });
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
    // Apis.roadPostList()
    //   .then(function (response) {
    //     console.log(response);
    //     dispatch(setPost(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log("getPostFB에러", error);
    //   });

    // 수찬
    // 만들어둔 instance에 보낼 요청 타입과 주소로 요청합니다.
    instance
      .get("/posts")
      .then((res) => {
        //요청이 정상적으로 끝나고 응답을 받아왔다면 수행할 작업!
        console.log(res);

        // DB와 리덕스 데이터 저장형식 맞춰주기

        let post_list = res.data.map((post) => {
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
      .catch((err) => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        console.log("에러 났어!");
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
      // await Apis.editPost(postId, editContents);
      // const editPostContents = {
      //   ...editContents,
      //   postId: postId,
      // };
      // dispatch(editPost(editPostContents));
      // history.replace(`/detail/${postId}`);
    } catch (error) {
      console.log(error);
    }
  };

// const deletePostFB =

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        // draft.list = action.payload.post_list.postList;

        // 수찬
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
};

export { actionCreators };
