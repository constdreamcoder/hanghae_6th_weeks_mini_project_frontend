import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
    const is_login = useSelector((state) => state.user.is_login);
    const does_token_exist = localStorage.getItem("token") ? true : false;

    if (does_token_exist && is_login) {
        return <React.Fragment>{props.children}</React.Fragment>;
    }
    return null;
};

export default Permit;
