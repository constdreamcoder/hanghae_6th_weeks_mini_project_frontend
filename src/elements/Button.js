import React from "react";

// styles
import styled, { keyframes } from "styled-components";

const Button = (props) => {
    // new : bg, padding
    const {
        text,
        _onClick,
        is_float,
        is_custom,
        children,
        margin,
        width,
        color,
        bg,
        padding,
        name,
    } = props;

    if (is_float) {
        return (
            <React.Fragment>
                <FloatButton onClick={_onClick}>
                    {text ? text : children}
                </FloatButton>
            </React.Fragment>
        );
    }

    if (is_custom) {
        return (
            <React.Fragment>
                <CustomButton onClick={_onClick}>
                    {text ? text : children}
                </CustomButton>
            </React.Fragment>
        );
    }

    const styles = {
        margin: margin,
        width: width,
        bg: bg, // new
        padding: padding, // new
        color: color,
    };

    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick} name={name}>
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
    is_custom: false,
    margin: false,
    width: "100%",
    bg: "#212121", // new
    padding: "12px 0px", // new
    color: "white"
};

const ElButton = styled.button`
    width: ${(props) => props.width};
    background-color: ${(props) => props.bg}; // new
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    border: none;
    // margin: none;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
    cursor: pointer; // new
    border-radius: 8px;
    &:hover {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ${(props) => props.bg};
        cursor: pointer
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const FloatButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 36px;
    position: fixed;
    bottom: 30px;
    right: 60px;
    border: none;
    text-decoration: none;
    color: white;
    background-color: rgb(38, 194, 129);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 300ms ease-in-out;
    &:hover {
        animation: ${rotate} 2s linear infinite;
        cursor: pointer
    }
`;

const CustomButton = styled.button`
    position: fixed;
    bottom: 100px;
    right: 60px;
    border: none;
    color: white;
    background-color: black;
    width: 50px;
    border-radius: 50%;
    height: 50px;
    cursor: pointer;
    z-index: 3;
`;
export default Button;
