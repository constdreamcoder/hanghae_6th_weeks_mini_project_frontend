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
    } = props;

    if (multiLine) {
        return (
            <Grid>
                <Grid padding="0 0 4px 0">
                    {label && <Text margin="0px" color="rgba(0,0,0,0.6)">{label}</Text>}
                </Grid>
                <ElTextarea
                    rows="10"
                    type={type}
                    placeholder={placeholder}
                    onChange={_onChange}
                    name={name}
                    defaultValue={value}
                ></ElTextarea>
            </Grid>
        );
    }

    return (
        <React.Fragment>
            <Grid>
                <Grid padding="0 0 4px 0">
                    {label && <Text margin="0" color="rgba(0,0,0,0.6)">{label}</Text>}
                </Grid>
                <ElInput
                    rows="10"
                    type={type}
                    placeholder={placeholder}
                    onChange={_onChange}
                    name={name}
                    margin={margin}
                    defaultValue={value}
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
};

const ElTextarea = styled.textarea`
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.3);
    width: 100%;
    padding: 12px 8px;
    box-sizing: border-box;
    margin: ${(props) => props.margin}; // new
    ::placeholder {
        color: rgba(0,0,0,0.3);
    }
    &:focus-visible {
        outline-color: rgb(38,194,129);
    }
`;

const ElInput = styled.input`
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.3);
    width: 100%;
    padding: 12px 8px;
    box-sizing: border-box;
    ::placeholder {
        color: rgba(0,0,0,0.3);
    }
    &:focus-visible {
        outline-color: rgb(38,194,129);
      }
`;

export default Input;
