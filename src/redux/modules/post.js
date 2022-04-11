import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Apis } from "../../shared/Api";

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

export const getPostFB =
    () =>
    async (dispatch, getState, { history }) => {
        try {
            const { data } = await Apis.roadPostList();
            dispatch(setPost(data));
        } catch (error) {}
    };

const editPostFB = (postId, editContents) => {
    return function (dispatch, getState, { history }) {
        console.log("====== editpostFB시작 =====", editContents);
        Apis.editPost(postId, editContents).then(function (response) {
            console.log(response);
            const editPostContents = {
                ...editContents,
                postId: postId,
                //postId 변경안되겠지?
            };
            console.log(editPostContents);
            dispatch(editPost(editPostContents));
            window.alert("게시물이 수정되었습니다!");
            history.replace(`/detail/${postId}`);
        });
    };
};

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
                console.log("리듀서시작", action.payload.post);
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
