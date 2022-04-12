import { createAction, handleActions } from "redux-actions";
import produce from "immer";

import moment from "moment";

// Link with DB
import instance from "../../shared/Request";
// import { apis } from "../../shared/Request";

// Actions
const SEND_COMMENT = "SEND_COMMENT";
const GET_COMMENTS = "GET_COMMENTS";
const Edit_COMMENT = "Edit_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

//Initial State
const intialState = {
  list: [],
  comment: "",
};

const initialSingleDataForm = {
  postId: "",
  commentId: "",
  nickname: "test0",
  profile: "RamenJjangJjangMan",
  comment: "",
  createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
};
// Actions Creators
const sendComment = createAction(SEND_COMMENT, (comment) => ({ comment }));
const getComments = createAction(GET_COMMENTS, (comment_list) => ({
  comment_list,
}));
const editComment = createAction(Edit_COMMENT, (editedComment) => ({
  editedComment,
}));
const deletComment = createAction(DELETE_COMMENT, (commentId) => ({
  commentId,
}));

// Middlewares

// send a newly written comment
const sendCommentDB = (comment = "") => {
  return function (dispatch, getState, { history }) {
    let createdAt = moment().format("YYYY-MM-DD hh:mm:ss");

    let postId = "aaa";
    console.log(typeof `/api/comments/${postId}`);
    // 만들어둔 instance에 보낼 요청 타입과 주소로 요청합니다.
    instance
      .post(`/api/comments/${postId}`, {
        comment: comment,
        createdAt: createdAt,
      })
      .then((res) => {
        //요청이 정상적으로 끝나고 응답을 받아왔다면 수행할 작업!
        console.log("통신 성공!!");
        console.log(res);

        let new_comment = {
          ...initialSingleDataForm,
          postId: res.data.comments[0].postId,
          commentId: res.data.comments[0]._id,
          comment: comment,
          createdAt: createdAt,
        };

        dispatch(sendComment(new_comment));
      })
      .catch((error) => {
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

// data load
const getCommentsDB = (postId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/api/comments/${postId}`)
      .then((res) => {
        //요청이 정상적으로 끝나고 응답을 받아왔다면 수행할 작업!
        console.log(res);

        // DB와 리덕스 저장 파일 형식 맞추기

        let comment_list = [];

        res.data.comments.forEach((comment) =>
          comment_list.push({
            postId: comment.postId,
            commentId: comment._id,
            nickname: "test0",
            profile:
              "https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg",
            comment: comment.comment,
            createdAt: comment.createdAt,
          })
        );
        console.log(comment_list);
        dispatch(getComments(comment_list));
      })
      .catch((error) => {
        // // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        // console.log("에러 났어!");
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

// update
const editCommentDB = (commentId = "", comment = "") => {
  return function (dispatch, getState, { history }) {
    let editingComment = getState().comment.list.filter(
      (comment, idx) => comment.commentId === commentId
    )[0];

    console.log(editingComment);

    let editedComment = {};

    if (editingComment.createdAt.indexOf("(수정됨)") === -1) {
      editedComment = {
        ...editingComment,
        comment: comment,
        createdAt: editingComment.createdAt + "(수정됨)",
      };
    } else {
      editedComment = {
        ...editingComment,
        comment: comment,
        createdAt: editingComment.createdAt,
      };
    }

    console.log(editedComment);
    // return;

    // 만들어둔 instance에 보낼 요청 타입과 주소로 요청합니다.
    instance
      .put(`/api/comments/${commentId}`, {
        comment: comment,
      })
      .then((res) => {
        //요청이 정상적으로 끝나고 응답을 받아왔다면 수행할 작업!
        console.log("요청 성공!!");
        console.log(res);

        dispatch(editComment(editedComment));
      })
      .catch((error) => {
        // // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        // console.log("에러 났어!");
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

// delete
const deleteCommentDB = (commentId = "") => {
  return function (dispatch, getState, { history }) {
    console.log(getState());
    instance
      .delete(`/api/comments/${commentId}`)
      .then((res) => {
        //요청이 정상적으로 끝나고 응답을 받아왔다면 수행할 작업!
        console.log(res);
        dispatch(deletComment(commentId));
      })
      .catch((error) => {
        // // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        // console.log("에러 났어!");
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

// Reducer
export default handleActions(
  {
    [SEND_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [...draft.list, { ...action.payload.comment }];
        console.log(draft.list);
      }),
    [GET_COMMENTS]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload);
        draft.list = action.payload.comment_list;
      }),
    [Edit_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.editedComment);
        draft.list = draft.list.map((comment) =>
          comment.commentId === action.payload.editedComment.commentId
            ? { ...comment, ...action.payload.editedComment }
            : { ...comment }
        );
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        let new_comment_list = draft.list.filter(
          (comment) => comment.commentId !== action.payload.commentId
        );

        // console.log(new_comment_list);

        draft.list = [...new_comment_list];
      }),
  },
  intialState
);

// ActionCreators

const actionCreators = {
  sendComment,
  sendCommentDB,
  getCommentsDB,
  deleteCommentDB,
  editCommentDB,
};

export { actionCreators };