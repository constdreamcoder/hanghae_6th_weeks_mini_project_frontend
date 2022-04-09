import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// import { storage } from "../../shared/firebase";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

// initial state
const initialState = {
  image_url: "",
  uploading: false,
  preview: null,
};

const uploadImageFB = (image) => {
  return function (dispatch, getState, { history }) {
    // 업로드를 시작한다는 의미의 uploading을 true로 변경하는 action을 생성

    dispatch(uploading(true));
    // 이미지 파이어스토리지에 저장
    // const _upload = storage.ref(`images/${image.name}`).put(image);

    // _upload.then((snapshot) => {
    //   console.log(snapshot);
    //   // 업로드가 돤료되었다는 의미에서 uploading을 false로 전환
    //   //   dispatch(uploading(false));

    //   // 업로드된 이미지 링크 받아오기
    //   snapshot.ref.getDownloadURL().then((url) => {
    //     dispatch(uploadImage(url));
    //     console.log(url); // 업로드된 url로 불러오기
    //   });
    // });
  };
};

// reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false; // 업로드가 돤료되었다는 의미에서 uploading을 false로 전환
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),

    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

const actionCreators = {
  uploadImage,
  uploadImageFB,
  setPreview,
};

export { actionCreators };
