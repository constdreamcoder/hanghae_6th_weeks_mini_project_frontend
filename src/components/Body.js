import React from "react";

// style
import styled from "@emotion/styled";

// components
import CardList from "./CardList";

const Body = (props) => {
    console.log(props);

    return (
        <React.Fragment>
            <BannerImage>
                <BannerText>
                    <BannerSpan className="banner-image">
                        냉장고를 부탁해
                    </BannerSpan>
                </BannerText>
            </BannerImage>
            <CardList />
        </React.Fragment>
    );
};

const BannerImage = styled.div`
    width: 100vw;
    height: 20rem;
    border-radius: 0px;
    background-image: url("https://thumbs.dreamstime.com/z/retro-refrigerator-different-food-comic-cartoon-style-vector-illustration-89907376.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 25px;
`;

const BannerText = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const BannerSpan = styled.span`
    font-size: 5rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
    text-align: center;
    text-shadow: black 1px 1px 1px;
`;

export default Body;
