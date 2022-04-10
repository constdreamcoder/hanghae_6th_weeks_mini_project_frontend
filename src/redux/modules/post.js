import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { postApis } from "../../shared/postApi";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

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
        console.log("=====postContents내용=====", postContents);

        postApis
            .addPost(postContents)
            .then(function (response) {
                //response로 postId랑 유저정보 받아오기 가능할듯 https://github.com/robinyeon/ANABADA/blob/yeon/src/redux/modules/card.js 참고
                console.log(response.data);

                // const addPostContents = {
                //     ...postContents, postId: response.data // 유저정보는 ?
                // }
            })
            .catch(function (error) {
                console.log("addPostFB에러", error);
            });

        // // const postDB = firestore.collection("post"); // 파이어스토어에서 컬렉션 선택
        // // const _user = getState().user.user; // 리덕스에 있는 정보 가져오기
        // // const user_info = {
        // //   user_name: _user.user_name,
        // //   user_id: _user.uid,
        // //   user_profile: _user.user_profile,
        // // };
        // const _post = {
        // //   ...initialPost,
        //   contents: contents,
        //   insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"), // 시간 객체가 만들어지는 시간을 생각하여 다시 재할당해줌
        // };
        // console.log({ ...user_info, ..._post });
        // const _image = getState().image.preview;
        // console.log(_image);
        // // 업로드된 이미지 객체을 url 가져오기
        // const _upload = storage
        //   .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
        //   .putString(_image, "data_url");
        // // 그것을 url로
        // _upload.then((snapshot) => {
        //   snapshot.ref
        //     .getDownloadURL()
        //     .then((url) => {
        //       console.log(url);
        //       return url;
        //     })
        //     .then((url) => {
        //       // 파이어스토어에 데이터베이스 추가
        //       postDB
        //         .add({ ...user_info, ..._post, image_url: url })
        //         .then((doc) => {
        //           let post = { user_info, ..._post, id: doc.id, image_url: url };
        //           dispatch(addPost(post));
        //           history.replace("/");
        //           // 이미지 데이터 베이스(Storage)에 저장 후, 다시 포스트 작성을 하러 갔을 때 리덕스에 남아 있는 preview 이미지를 다시 기본 이미지로 되돌림
        //           dispatch(imageActions.setPreview(null));
        //         })
        //         .catch((err) => {
        //           window.alert("앗! 포스트 작성에 문제가 있아요!");
        //           console.log("post 작성에 실패했어요!", err);
        //         });
        //     })
        //     .catch((err) => {
        //       window.alert("앗! 이미지 업로드에 문제가 있어요!");
        //       console.log("앗! 이미지 업로드에 문제가 있어요!", err);
        //     });
        // });
    };
};

// const getPostFB = () => {
//     return function (dispatch, getState, { history }) {
//         const postDB = firestore.collection("post");

//         postDB.get().then((docs) => {
//             // 리덕스 형식에 맞추어 변환
//             let post_list = [];
//             docs.forEach((doc) => {
//                 let _post = doc.data();

//                 let post = Object.keys(_post).reduce(
//                     (acc, cur) => {
//                         if (cur.indexOf("user_") !== -1) {
//                             return {
//                                 ...acc,
//                                 user_info: {
//                                     ...acc.user_info,
//                                     [cur]: _post[cur],
//                                 },
//                             };
//                         }
//                         return { ...acc, [cur]: _post[cur] };
//                     },
//                     { id: doc.id }
//                 );

//                 post_list.push(post);
//             });

//             console.log(post_list);
//             dispatch(setPost(post_list));
//         });
//     };
// };

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
    },
    initialState
);

const actionCreators = {
    setPost,
    addPost,
    // getPostFB,
    addPostFB,
};

export { actionCreators };
