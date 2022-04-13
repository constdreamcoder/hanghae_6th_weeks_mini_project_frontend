import React from "react";

// components
import Body from "../components/Body";
import BodyContainer from "../components/BodyContainer";
import Footer from "../components/Footer";

//elements

// style
import styled from "@emotion/styled";

const Mypage = (props) => {
    return (
        <React.Fragment>
            <Wrapper>
                <BodyContainer></BodyContainer>
                <Footer />
            </Wrapper>
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

export default Mypage;
