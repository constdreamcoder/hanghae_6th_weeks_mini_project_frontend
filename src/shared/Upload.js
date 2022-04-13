import React from "react";
import { Button, Input } from "../elements";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useDispatch, useSelector } from "react-redux";
import AWS from "aws-sdk";

const Upload = (props) => {
    const dispatch = useDispatch();
    const fileInput = React.useRef();
    const uploadImage = useSelector((state) => state);

    const previewFile = (e) => {
        const file = fileInput.current.files[0]; //이미지파일이름
        const reader = new FileReader(); //이미지파일 읽어주는 객체
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            dispatch(imageActions.setPreview(reader.result));
        };
    };

    AWS.config.update({
        region: "ap-northeast-2",
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId:
                "ap-northeast-2:8eb201de-6a66-4c4c-ad36-cddabf07cfe1",
        }),
    });

    const uploadFile = () => {
        const date = new Date();
        const file = fileInput.current.files[0];

        // console.log(date, file);
        if (!file) {
            window.alert("이미지 파일을 선택해주세요!");
            return;
        }

        const uploadToS3 = new AWS.S3.ManagedUpload({
            params: {
                Bucket: "my-fridge-image",
                Key: file.name + date.getTime() + ".jpg",
                Body: file,
            },
        });

        const promise = uploadToS3.promise();

        promise.then(
            (data) => {
                dispatch(imageActions.uploadImage(data.Location));
                // window.alert("이미지 업로드 성공");
            },
            (error) => {
                console.log("이미지업로드실패", error);
                return window.alert("이미지 업로드 실패", error.message);
            }
        );
    };

    return (
        <React.Fragment>
            <input
                type="file"
                ref={fileInput}
                onChange={previewFile}
                // disabled={is_uploading}
            />
            <Button width="100px" _onClick={uploadFile}>
                업로드하기
            </Button>
        </React.Fragment>
    );
};

export default Upload;
