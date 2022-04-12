import React from "react";
import styled from "styled-components";

const Button = (props) => {
  // new : bg, padding
  const { text, _onClick, is_float, children, margin, width, bg, padding } =
    props;

    if (is_float) {
        return (
            <React.Fragment>
                <FloatButton onClick={_onClick}>
                    {text ? text : children}
                </FloatButton>
            </React.Fragment>
        );
    }

  const styles = {
    margin: margin,
    width: width,
    bg: bg, // new
    padding: padding, // new
  };

    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>
                {text ? text : children}
            </ElButton>
        </React.Fragment>
    );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  bg: "#212121", // new
  padding: "12px 0px", // new
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg}; // new
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  margin: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  cursor: pointer; // new
  border-radius: 8px;
`;

const FloatButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: #212121;
    color: #ffffff;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
    text-align: center;
    // vertical-align: middle;
    border: none;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default Button;
