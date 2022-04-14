import React from "react";
import AWS from "aws-sdk";
import moment from "moment";
import { Grid, Input, Button, Image } from "../elements/index";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
const PostWrite = (props) => {
    const dispatch = useDispatch();
    //=================================================preview관련
    const fileInput = React.useRef();
    const previewFile = (e) => {
        const file = fileInput.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            dispatch(imageActions.setPreview(reader.result));
        };
    };
    const preview = useSelector((state) => state.image.preview);
    //===============================================contents관련
    // 작성하기, 수정하기 클릭 시 전달할 input의 내용
    const [contents, setContents] = React.useState({
        title: "",
        content: "",
        item: "",
    });
    // input에 텍스트 입력 시 contents 로 저장하는 함수
    const changeContents = (e) => {
        const { name, value } = e.target;
        setContents({ ...contents, [name]: value });
    };
    //===============================================addPost관련
    const addPost = () => {
        if (
            contents.title === "" ||
            contents.content === "" ||
            contents.item === ""
        ) {
            window.alert("내용을 모두 작성해주세요");
            return;
        }
        //==========================================이미지 업로드
        const date = new Date();
        const file = fileInput.current.files[0];
        if (!file) {
            window.alert("이미지 파일을 선택해주세요!");
            return;
        }
        AWS.config.update({
            region: "ap-northeast-2",
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId:
                    "ap-northeast-2:8eb201de-6a66-4c4c-ad36-cddabf07cfe1",
            }),
        });
        const uploadToS3 = new AWS.S3.ManagedUpload({
            params: {
                Bucket: "my-fridge-image",
                Key: file.name + date.getTime() + ".jpg",
                Body: file,
            },
        });
        const promise = uploadToS3.promise();
        //===========================================이미지+작성내용 post.js로 보내기
        promise.then(
            (data) => {
                dispatch(imageActions.uploadImage(data.Location));
                const postContents = {
                    ...contents,
                    image: data.Location,
                    createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
                };
                dispatch(postActions.addPostFB(postContents));
            },
            (error) => {
                return window.alert(
                    "게시글 전송 중 오류가 발생했습니다.",
                    error.message
                );
            }
        );
    };
    return (
        <React.Fragment>
            <Grid width="70vw" margin="100px auto 0 auto" is_flex>
                <Grid center bg="green">
                    <Image
                        previewSize="100"
                        shape="rectangle"
                        src={
                            preview
                                ? preview
                                : "https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2Frefrigerator_text.PNG?alt=media&token=2dd0c2a6-ee24-4929-8692-46160a2cbb84"
                        }
                    />
                    <input type="file" ref={fileInput} onChange={previewFile} />
                </Grid>

                <Grid bg="blue" heght="100px">
                    <Grid width="90%" margin="auto">
                        <Grid>
                            <Input
                                placeholder={"제목"}
                                name="title"
                                value={contents.title}
                                _onChange={changeContents}
                                border={"2px solid #26C281"}
                                margin={"10px 0 0 0"}
                            ></Input>
                        </Grid>
                        <Grid>
                            <Input
                                placeholder={"냉장고에 어떤 식재료가 있나요?"}
                                name="item"
                                value={contents.item}
                                _onChange={changeContents}
                                border={"2px solid #26C281"}
                                margin={"10px 0 0 0"}
                            ></Input>
                        </Grid>
                        <Grid>
                            <Input
                                placeholder={"어떤 도움을 요청하시겠어요?"}
                                name="content"
                                value={contents.content}
                                _onChange={changeContents}
                                multiLine
                                border={"2px solid #26C281"}
                                margin={"10px 0 0 0"}
                            ></Input>
                        </Grid>
                        <Grid>
                            <Button
                                _onClick={addPost}
                                text="게시글 작성"
                                margin={"10px 0 0 0"}
                            ></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default PostWrite;
