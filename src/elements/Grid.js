import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const {
        is_flex,
        width,
        margin,
        padding,
        bg,
        children,
        center,
        position, // new
        zIndex,
        height, // new
        _onClick, //추가했습니다.
        border,
    } = props;

    // children이라는 변수는 의미적으로 style과 관련이 없는 변수이기 때문에
    // 의미구분을 위하여 아래 코드와 같이 style에 관련된 변수들만 모아 새로 선언해준다.
    const styles = {
        is_flex: is_flex,
        width: width,
        margin: margin,
        padding: padding,
        bg: bg,
        center: center,
        position: position, //new
        zIndex: zIndex,
        height, // new
        border: border,
    };
    return (
        <React.Fragment>
            <GridBox {...styles} onClick={_onClick}>
                {children}
            </GridBox>
        </React.Fragment>
    );
};

Grid.defaultProps = {
    children: null,
    is_flex: false,
    width: "100%",
    padding: false,
    margin: false,
    bg: false,
    center: false,
    position: "", // new
    zIndex: "", // new
    height: "100%", //new
    border: false,
    onClick: () => {}, // 추가했습니다.
};

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box;
    padding: ${(props) => props.padding};
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
        props.is_flex
            ? `display: flex; align-items: center; justify-content: space-between`
            : ""}
  ${(props) => (props.center ? `text-align: center` : "")};
    position: ${(props) => props.position};
    z-index: ${(props) => props.zIndex};
    overflow: hidden;
    border: ${(props) => props.border}; //추가했습니다.
`;

export default Grid;
