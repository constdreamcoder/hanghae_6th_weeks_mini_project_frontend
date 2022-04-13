import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// import { storage } from "../../shared/firebase";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

// initial state
const initialState = {
    image_url: null,
    uploading: false,
    preview: null,
};

// reducer
export default handleActions(
    {
        [UPLOAD_IMAGE]: (state, action) =>
            produce(state, (draft) => {
                draft.image_url = action.payload.image_url;
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
    setPreview,
};

export { actionCreators };
