import React from "react";

// components
import Body from "../components/Body";
import BodyContainer from "../components/BodyContainer";
import Footer from "../components/Footer";

//elements
import { Button } from "../elements";

// style
import styled from "@emotion/styled";

// shared
import Permit from "../shared/Permit";

const Main = (props) => {
    const { history } = props;

    return (
        <React.Fragment>
            <Wrapper>
                <BodyContainer>
                    <Body />
                </BodyContainer>
                <Footer />
            </Wrapper>
            <Permit>
                <Button
                    is_float
                    text="+"
                    _onClick={() => {
                        history.push(`/write`);
                    }}
                ></Button>
            </Permit>
        </React.Fragment>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
`;

export default Main;
