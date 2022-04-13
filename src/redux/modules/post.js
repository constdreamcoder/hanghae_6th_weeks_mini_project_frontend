import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Apis } from "../../shared/Api";

//action
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";

//actionCreator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));

//initialState
const initialState = {
    list: [],
};

const initialPost = {
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

const editPostFB = (postId, editContents) => {
    return function (dispatch, getState, { history }) {
        console.log(postId, editContents);
        Apis.editPost(postId, editContents)
            .then(function (response) {
                const editPostContents = {
                    ...editContents,
                    postId: postId,
                };
                dispatch(editPost(editPostContents));
                window.alert("수정완료!");
                history.goBack(); //(`/detail/${postId}`);
            })
            .catch(function (error) {
                console.log("editPostFB에러", error);
            });
    };
};
// export const editPostFB =
//     (postId, editContents) =>
//     async (dispatch, getState, { history }) => {
//         try {
//             await Apis.editPost(postId, editContents);
//             const editPostContents = {
//                 ...editContents,
//                 postId: postId,
//             };
//             dispatch(editPost(editPostContents));
//             window.alert("수정완료!");
//             history.goBack(); //(`/detail/${postId}`);
//         } catch (error) {
//             console.log(error);
//         }
//     };

const deletePostFB = (postId) => {
    return function (dispatch, getState, { history }) {
        Apis.deletePost(postId)
            .then(function (response) {
                console.log(response.data);
                window.alert("삭제완료!");
                history.replace("/");
            })
            .catch(function (error) {
                console.log("editPostFB에러", error);
            });
    };
};

// const setMypostFB = (postId) => {
//     return function (dispatch, getState, { history }) {
//         Apis.roadMypost()
//             .then(function (response) {
//                 console.log(response);

//                 // dispatch(setPost(response.data));
//             })
//             .catch(function (error) {
//                 console.log("setMypostFB에러", error);
//             });
//     };
// };

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
    },
    initialState
);

//export
const actionCreators = {
    setPost,
    addPost,
    editPost,
    getPostFB,
    addPostFB,
    editPostFB,
    deletePostFB,
    // setMypostFB,
};

export { actionCreators };
