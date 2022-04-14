import React, { useEffect } from "react";
import AWS from "aws-sdk";
import moment from "moment";

import { Grid, Input, Button, Image } from "../elements/index";
import { useSelector, useDispatch } from "react-redux";
import post, { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
import { history } from "../redux/configureStore";

const PostEdit = (props) => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (params_postId && !edit_post) {
            window.alert("새로고침 시 뒤로 돌아갑니다.");
            history.replace("/");
            window.location.reload();
            return;
        }
        dispatch(imageActions.setPreview(edit_post.image));
    }, []);

    //================================================= 수정할 게시글 추출
    const post_list = useSelector((state) => state.post.list);
    const params_postId = props.match.params.postId;
    const edit_post = post_list.find((post) => post.postId === params_postId);

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
    const preview = useSelector((state) => state.image?.preview);
    //===============================================contents관련

    const [contents, setContents] = React.useState({
        title: edit_post?.title,
        content: edit_post?.content,
        item: edit_post?.item,
    });
    // input에 텍스트 입력 시 contents 로 저장하는 함수
    const changeContents = (e) => {
        const { name, value } = e.target;
        setContents({ ...contents, [name]: value });
    };
    //===============================================editPost관련
    const editPost = () => {
        if (
            contents.title === "" ||
            contents.content === "" ||
            contents.item === ""
        ) {
            window.alert("내용을 모두 작성해주세요");
            return;
        }

        const file = fileInput.current.files[0];
        //경우의 수: 수정 안 함, 글만 수정, 모두수정
        if (!file) {
            //수정 안 함
            if (
                contents.title === edit_post.title &&
                contents.content === edit_post.content &&
                contents.item === edit_post.item
            ) {
                window.alert("수정할 내용이 없습니다.");
            }
            // 글만 수정
            else {
                const editContents = {
                    ...contents,
                    image: edit_post.image,
                    createdAt: edit_post.createdAt.includes("수정")
                        ? edit_post.createdAt
                        : edit_post.createdAt + "(수정)",
                    //수정이라고 하면 수정한 날짜 같다??
                };

                dispatch(
                    postActions.editPostFB(edit_post.postId, editContents)
                );
            }
        }
        // 글, 사진 모두 수정
        else {
            const date = new Date();

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
            //===========================================이미지 post.js로 보내기
            promise.then(
                (data) => {
                    dispatch(imageActions.uploadImage(data.Location));
                    const editContents = {
                        ...contents,
                        image: data.Location,
                        createdAt: edit_post.createdAt + "(수정)",
                    };
                    console.log("수정시작(글, 사진)");
                    dispatch(
                        postActions.editPostFB(edit_post.postId, editContents)
                    );
                },
                (error) => {
                    return window.alert(
                        "게시글 전송 중 오류가 발생했습니다.",
                        error.message
                    );
                }
            );
        }
    };
    //then 테스트
    return (
        <React.Fragment>
            <Grid width="50vw" margin="20px auto">
                <Grid center>
                    <Image
                        previewSize="100"
                        shape="rectangle"
                        src={
                            preview
                                ? preview
                                : "https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2Frefrigerator_text.PNG?alt=media&token=2dd0c2a6-ee24-4929-8692-46160a2cbb84"
                        }
                    />
                </Grid>
                {/* Input 프롭스에 name, value 추가했습니다. */}
                <Grid>
                    <Grid center>
                        <input
                            type="file"
                            ref={fileInput}
                            onChange={previewFile}
                        />
                    </Grid>
                    <Input
                        placeholder={"제목"}
                        name="title"
                        value={contents.title}
                        _onChange={changeContents}
                    ></Input>
                </Grid>
                <Grid>
                    <Input
                        placeholder={"냉장고에 어떤 식재료가 있나요?"}
                        name="item"
                        value={contents.item}
                        _onChange={changeContents}
                    ></Input>
                </Grid>
                <Grid>
                    <Input
                        placeholder={"어떤 도움을 요청하시겠어요?"}
                        name="content"
                        value={contents.content}
                        _onChange={changeContents}
                        multiLine
                    ></Input>
                </Grid>
                <Grid>
                    <Button _onClick={editPost} text="게시글 수정"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default PostEdit;
