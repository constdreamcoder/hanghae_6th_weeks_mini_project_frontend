import styled from "styled-components";
import React from "react";

const Image = (props) => {
    const { shape, src, size } = props;

    const styles = {
        src: src,
        size: size,
    };

    if (shape === "circle") {
        return <ImageCircle {...styles}></ImageCircle>;
    }

    if (shape === "rectangle") {
        return (
            <AspectOutter>
                <AspectInner {...styles} />
            </AspectOutter>
        );
    }
    return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
    shape: "circle",
    src: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
    size: 36,
};

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    // backgroud-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px; // css 변수 선언 방식
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
    background-repeat: no-repeat;
`;

export default Image;
