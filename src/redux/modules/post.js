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
    nickname: "",
    email: "",
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
                // console.log("=====포스트리스트", response.data);

                let post_list = response.data.postList.map((post) => {
                    let keys = Object.keys(initialPost);
                    console.log(keys);

                    let _post = keys.reduce(
                        (acc, cur) => {
                            console.log(acc);
                            console.log(cur);
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
const editPostFB = (postId, editContents) => {
    return function (dispatch, getState, { history }) {
        console.log("수정시작2", postId, editContents);

        Apis.editPost(postId, editContents)
            .then(function (response) {
                console.log("수정시작3", response);
                const editPostContents = {
                    ...editContents,
                    postId: postId,
                };
                dispatch(editPost(editPostContents));
                // window.alert("수정완료!");
                // history.goBack(); //(`/detail/${postId}`);
            })
            .catch(function (error) {
                console.log("수정시작4");
                console.log("editPostFB에러", error);
            });
    };
};

const deletePostFB = (postId) => {
    return function (dispatch, getState, { history }) {
        Apis.deletePost(postId)
            .then(function (response) {
                console.log(response.data);
                window.alert("삭제완료!");
                history.replace("/");
            })
            .catch(function (error) {
                console.log("editPostFB에러", error.response.data.errorMessage);
            });
    };
};

const setMypostFB = () => {
    return function (dispatch, getState, { history }) {
        Apis.roadMypost()
            .then(function (response) {
                console.log("=====마이포스트리스트", response.data.mylist);
                dispatch(setPost(response.data.mylist));
            })
            .catch(function (error) {
                console.log("setMypostFB에러", error.response);
            });
    };
};
// 검색기능
// const searchPostFB = (item) => {
//     return function (dispatch, getState, { history }) {
//         console.log(item);
//         // Apis.searchPost()
//     };
// };

// reducer
export default handleActions(
    {
        [SET_POST]: (state, action) =>
            produce(state, (draft) => {
                // draft.list = action.payload.post_list.postList;
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
//export
const actionCreators = {
    setPost,
    addPost,
    editPost,
    getPostFB,
    addPostFB,
    editPostFB,
    deletePostFB,
    setMypostFB,
    // searchPostFB,
};
export { actionCreators };
