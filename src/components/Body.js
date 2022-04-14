import React from "react";

// style
import styled from "@emotion/styled";

// components
import CardList from "./CardList";

const Body = (props) => {
    console.log(props);

    return (
        <React.Fragment>
            <CardList/>
        </React.Fragment>
    );
};

export default Body;
