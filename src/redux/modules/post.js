import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Apis } from "../../shared/Api";

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
};

// middlewares
const addPostFB = (contents = "") => {
    return function (dispatch, getState, { history }) {
        const postContents = {
            ...initialPost,
            ...contents,
        };

        Apis.addPost(postContents)
            .then(function (response) {
                //response로 postId랑 유저정보 받아오기 가능할듯 https://github.com/robinyeon/ANABADA/blob/yeon/src/redux/modules/card.js 참고
                const addPostContents = {
                    ...postContents,
                };

                dispatch(addPost(addPostContents));
                window.alert("게시물이 작성되었습니다!");
                history.replace("/");
            })
            .catch(function (error) {
                console.log("addPostFB에러", error);
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
                dispatch(setPost(response.data));
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
            window.alert("수정완료!");
            history.replace(`/detail/${postId}`);
        } catch (error) {
            console.log(error);
        }
    };

const deletePostFB = (postId) => {
    return function (dispatch, getState, { history }) {
        Apis.deletePost(postId)
            .then(function (response) {
                dispatch(deletePost(postId));
                window.alert("삭제완료!");
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
                draft.list = action.payload.post_list.postList;
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
                let deleteIndex = draft.list.findIndex(
                    (post) => post.postId === action.payload.postId
                );
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
