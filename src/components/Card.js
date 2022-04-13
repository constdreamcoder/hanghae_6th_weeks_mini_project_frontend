import React from "react";

// elements
import { Grid, Image, Button, Text } from "../elements";

// style
import styled from "styled-components";

const Card = (props) => {
    const { postId, title, content, item, image, createdAt, _onClick } = props; // 닉네임, 프로필 사진
    return (
        <React.Fragment>
            <CardContainer>
                <CardBox>
                    <Image shape="rectangle" src={image} />

                    <Grid height="auto" is_flex width="auto" margin="7px 10px">
                        <Image display="inline-block" margin="0" />
                        <Text margin="0px 70px 0px 0px" bold>
                            닉네임
                        </Text>
                        <Text margin="0px 0px 0px 60px">댓글 10개</Text>
                        <Text
                            margin="0px 5px 0px 0px"
                            size="1.75rem"
                            color="red"
                        >
                            ❤
                        </Text>
                    </Grid>
                    <Grid
                        margin="0px 10px"
                        height="25%"
                        width="auto"
                        position="relative"
                    >
                        <Text margin="7px 5px" bold size="1.5rem">
                            {title}
                        </Text>
                        <Text margin="5px 0px" position="absolute">
                            {item}
                        </Text>
                    </Grid>
                    <Grid height="auto" is_flex width="auto" margin="10px 10px">
                        <Button text="수정"></Button>
                        <Grid>
                            <Text></Text>
                        </Grid>
                        <Button text="삭제"></Button>
                        {/* <Button>바로가기</Button> */}
                    </Grid>
                </CardBox>
                <CardCover onClick={_onClick}></CardCover>
            </CardContainer>
        </React.Fragment>
    );
};

Card.defaultProps = {
    _onClick: () => {},
};

const CardCover = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
    display: hidden;
`;

const CardContainer = styled.div`
    width: 350px;
    height: 500px;
    border-radius: 20px;
    position: relative;

    // border: 1px solid black;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover {
        transform: perspective(150px) translateZ(5px);
        box-shadow: -4px -4px 20px rgba(0, 0, 0, 0.505);
    }
`;

const CardBox = styled.div`
    // border: 1px solid blue;
    position: absolute;
    width: 100%;
    height: 100%;
`;

export default Card;
