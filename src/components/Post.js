//테스트 해 본 컴포넌트 (브랜치 합칠 때 배제해주세요!!))
import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import { Button, Grid, Image, Text } from "../elements";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex padding="16px">
                    <Image shape="circle" src={props.src} />
                    <Text bold>{props.title}</Text>
                    <Text>{props.createdAt}</Text>
                </Grid>
                {props.is_me && (
                    <Grid width="300px" is_flex>
                        <Button
                            width="100px"
                            _onClick={() =>
                                history.push(`/write/${props.postId}`)
                            }
                        >
                            수정하기
                        </Button>
                        <Button
                            width="100px"
                            _onClick={() =>
                                dispatch(postActions.deletePostFB(props.postId))
                            }
                        >
                            삭제하기
                        </Button>
                    </Grid>
                )}
                <Grid padding="16px">
                    <Text>{props.item}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.image} />
                </Grid>
                <Grid padding="16px">
                    <Text margin="0px" bold>
                        댓글 {props.content}개
                    </Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

// 부모로부터 받을 데이터(props)를 미리 넘겨받음
// 부모로부터 받아오는 데이터가 비어있거나 없는 경우에 대비해 필요한 props를 미리 넘겨받는 방식을 의마함
// 장점: 이로 인하여 화면이 쉽게 깨지는 에러가 날 확률이 현저히 줄어듬
Post.defaultProps = {
    user_info: {
        user_name: "mean0",
        user_profile:
            "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
    },
    image_url:
        "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
    contents: "고양이네요!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00",
};

export default Post;
