import styled from "styled-components";
import React from "react";
import { width } from "@mui/system";

const Image = (props) => {
  // new : margin, display
  const { shape, src, size, display, margin } = props;

  const styles = {
    src: src,
    size: size,
    display: display, // new
    margin: margin, // new
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
  display: "", // new
  margin: "4px", // new
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  height: auto;
  background-image: url("${(props) => props.src}");
  backgroud-size: cover;
  background-position: center; // new
  border-radius: 20px 20px 0px 0px; // new
  background-repeat: no-repeat;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px; // css 변수 선언 방식
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: ${(props) => props.margin}; // new
  background-position: center; // new
  background-repeat: no-repeat;
  display: ${(props) => props.display}; // new
`;

export default Image;
