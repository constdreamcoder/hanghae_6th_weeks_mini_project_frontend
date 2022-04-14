import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, position, display, wordWarp } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    position: position,
    display: display,
  };


  if (wordWarp) {
    return (
      <WarpedP {...styles}>{children}</WarpedP>
    );
  }

  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  position: "",
  display: "inline",
  overflow: false,
  widthFull: false,
};

const WarpedP = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  position: ${(props) => props.position};
  display: ${(props) => props.display};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  position: ${(props) => props.position};
  display: ${(props) => props.display};
`;
export default Text;
