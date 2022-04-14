import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
    const {
        label,
        placeholder,
        _onChange,
        type,
        multiLine,
        name,
        margin,
        value,
        border,
        width, //추가했습니다.
    } = props;

    if (multiLine) {
        return (
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                <ElTextarea
                    rows="5"
                    type={type}
                    placeholder={placeholder}
                    onChange={_onChange}
                    name={name}
                    margin={margin}
                    defaultValue={value}
                    border={border}
                ></ElTextarea>
            </Grid>
        );
    }

    return (
        <React.Fragment>
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                <ElInput
                    rows="10"
                    type={type}
                    placeholder={placeholder}
                    onChange={_onChange}
                    name={name}
                    margin={margin}
                    defaultValue={value}
                    border={border}
                    width={width} //추가했습니다.
                />
            </Grid>
        </React.Fragment>
    );
};

Input.defaultProps = {
    multiLine: false,
    label: false,
    placeholder: "텍스트를 입력해주세요.",
    _onChange: () => {},
    type: "text",
    name: "",
    value: "",
    margin: "", // new
    border: "1px solid #212121",
    width: "100%", //추가했습니다.
};

const ElTextarea = styled.textarea`
    border: ${(props) => props.border};
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    margin: ${(props) => props.margin}; // new
`;

const ElInput = styled.input`
    border: ${(props) => props.border};
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
`;

export default Input;
