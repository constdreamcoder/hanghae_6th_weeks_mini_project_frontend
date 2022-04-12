import styled from "styled-components";
import React from "react";
import { width } from "@mui/system";

const Image = (props) => {
  // new : margin, display, paddingTop
  const { shape, src, size, display, margin, paddingTop, border } = props;

  const styles = {
    src: src,
    size: size,
    display: display, // new
    margin: margin, // new
    paddingTop: paddingTop, // new
    border: border,
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

  if (shape === "wide-image") {
    return <></>;
  }
  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: "circle",
  src: "",
  size: 80,
  display: "", // new
  margin: "0", // new
  paddingTop: "75%", // new
};

const AspectOutter = styled.div`
  width: fit-content;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: ${(props) => props.paddingTop}; // new
  overflow: hidden;
  height: auto;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center; // new
  // border-radius: 20px 20px 0px 0px; // new
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
  border: 1px solid rgba(0,0,0,0.1);
`;

export default Image;
