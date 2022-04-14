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
                <Grid padding="0 0 4px 0">
                    {label && (
                        <Text margin="0px" color="rgba(0,0,0,0.6)">
                            {label}
                        </Text>
                    )}
                </Grid>
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
                <Grid padding="0 0 4px 0">
                    {label && (
                        <Text margin="0" color="rgba(0,0,0,0.6)">
                            {label}
                        </Text>
                    )}
                </Grid>
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
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 100%;
    padding: 12px 8px;
    box-sizing: border-box;
    margin: ${(props) => props.margin}; // new
    ::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
    &:focus-visible {
        outline-color: rgb(38, 194, 129);
    }
`;

const ElInput = styled.input`
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 100%;
    padding: 12px 8px;
    box-sizing: border-box;
    ::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
    &:focus-visible {
        outline-color: rgb(38, 194, 129);
    }
`;

export default Input;
