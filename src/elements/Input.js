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
        value,
        margin,
    } = props;

    if (multiLine) {
        return (
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                <ElTextarea
                    rows="10"
                    placeholder={placeholder}
                    onChange={_onChange}
                    name={name}
                    value={value}
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
                    value={value}
                    margin={margin}
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
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    margin=${(props) => props.margin}; // new

`;

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;

export default Input;
