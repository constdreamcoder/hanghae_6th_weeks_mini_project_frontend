import React from "react";
import { Button, Input } from "../elements";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useDispatch } from "react-redux";

const Upload = (props) => {
    const dispatch = useDispatch();
    const fileInput = React.useRef();
    const selectFile = (e) => {
        const file = fileInput.current.files[0]; //이미지파일이름
        const reader = new FileReader(); //이미지파일 읽어주는 객체
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            console.log(reader.result);
            dispatch(imageActions.setPreview(reader.result));
        };
    };

    return (
        <React.Fragment>
            <input
                type="file"
                ref={fileInput}
                onChange={selectFile}
                // disabled={is_uploading}
            />
            <Button width="100px">업로드하기</Button>
        </React.Fragment>
    );
};

export default Upload;
