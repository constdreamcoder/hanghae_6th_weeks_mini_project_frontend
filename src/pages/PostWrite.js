import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text, Image } from "../elements/index";
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview);
    console.log(preview);

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
    // 클릭 시 미들웨어로 contents, 날짜, 이미지 보내는 함수
    const addPost = () => {
        console.log(contents);
    };
    //===============================================contents관련

    return (
        <React.Fragment>
            <Grid center>
                <Text bold size="30px">
                    게시글 작성
                </Text>
            </Grid>
            <Grid width="90%" margin="50px auto 0 auto" is_flex>
                <Upload></Upload>
            </Grid>
            <Grid center>
                <Text margin="20px 0 0 0">미리보기</Text>
                <Image
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
                <Button _onClick={addPost} text="게시글 작성"></Button>
            </Grid>
        </React.Fragment>
    );
};

export default PostWrite;
